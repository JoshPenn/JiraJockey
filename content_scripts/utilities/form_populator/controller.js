(function(window, $) {
  window.jj = window.jj || {};
  var jj = window.jj;
  var FILL_TRY_INTERVAL = 500;
  var FILL_TRY_TIMES = 10;

  $.fn.setFieldValue = function(value) {
    var $this   = $(this);
    var tagName = $this.prop("tagName");

    switch (tagName) {
      case 'INPUT':
      case 'TEXTAREA':
        return $this.val(value);

      case 'SELECT':
        return $this.find('option').each(function() {
          var $option = $(this);
          if ($option.val() === value) {
            $option.prop('selected', true);
          }
        });

      default:
        return false;
    }
  };

  function popForm() {
    var $forms  = $('form');
    var $fields = $forms.find('input, select, textarea');
    var counter = 0;

    $fields.each(function() {
      var $field = $(this);
      var value  = jj.nameValueMap.get($field) || '';
      // only fill empty field
      if (value && !$field.val()) {
        $field.setFieldValue(value);
        counter++;
      }
    });

    return !!counter;
  }

  // if auto-fill is checked, fill the form automatically
  chrome.storage.sync.get('isAutoFillForm', function(item) {
    var counter = 0;
    var timer   = null;

    if (item.isAutoFillForm) {
      // try to fill the form for times with a interval
      // do this because some checkout is rendering form
      // dynamically without event firing.
      (function tryToFill(){
        timer = setTimeout(function() {
          if (!jj.popForm() && counter < FILL_TRY_TIMES) {
            console.log('trying ... ' + counter);
            counter++;
            tryToFill();
          }
        }, FILL_TRY_INTERVAL);
      })();
    }
  });

  jj.popForm = popForm;

})(window, $);
