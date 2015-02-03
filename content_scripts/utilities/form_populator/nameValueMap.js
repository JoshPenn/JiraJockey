(function(window) {
  window.jj = window.jj || {};
  var jj    = window.jj;
  var forms = jj.forms;

  var localeInCookie = getCookie('_bb_country').toLowerCase() || null;
  forms.setLocale(localeInCookie);

  var nameValueStore = {

    // login
    'login'    : forms.get('login.login'),
    'password' : forms.get('login.password'),

    // address
    'country'      : forms.get('country'),
    'company name' : forms.get('company'),
    'first name'   : forms.get('name.first'),
    'last name'    : forms.get('name.last'),
    'full name'    : forms.get('name.first') + ' ' + forms.get('name.last'),
    'line1'        : forms.get('address.line1'),
    'line2'        : forms.get('address.line2'),
    'city'         : forms.get('address.city'),
    'state'        : forms.get('address.state'),
    'zip'          : forms.get('address.zip'),
    'email'        : forms.get('email'),
    'phone'        : forms.get('phone'),

    //cc
    'number' : forms.get('cc.number'),
    'cvv'    : forms.get('cc.cvv'),
  };

  var nameValueMap = {
    get : function($field) {
      var fieldName = ($field.attr('name') || '').trim();
      var fieldTitle = ($field.attr('title') || '').trim();

      return nameValueStore[fieldName] || nameValueStore[fieldTitle];
    },

    // take a list of titles and apply the basetitle value to each as a subprop of the map
    propagate : function (baseTitle, titleSet) {
      $.each(titleSet, function (index, newTitle) {
        nameValueStore[newTitle] = nameValueStore[baseTitle];
      });
    }
  };

  // propagate values to alternate titles
  nameValueMap.propagate('country',      ['addresses[billing][country]', 'addresses[shipping][country]', 'addresses[country]']);
  nameValueMap.propagate('company name', ['addresses[billing][company]', 'addresses[shipping][company]', 'addresses[company]']);
  nameValueMap.propagate('first name',   ['addresses[billing][name][first]', 'addresses[shipping][name][first]', 'addresses[name][first]']);
  nameValueMap.propagate('last name',    ['addresses[billing][name][last]', 'addresses[shipping][name][last]', 'addresses[name][last]']);
  nameValueMap.propagate('full name',    ['addresses[billing][name][full]', 'addresses[shipping][name][full]', 'addresses[name][full]']);
  nameValueMap.propagate('line1',        ['addresses[billing][line][0]', 'addresses[shipping][line][0]', 'addresses[line][0]', 'address', 'address line 1']);
  nameValueMap.propagate('line2',        ['addresses[billing][line][1]', 'addresses[shipping][line][1]', 'addresses[line][1]', 'extended address', 'address line 2']);
  nameValueMap.propagate('city',         ['addresses[billing][city]', 'addresses[shipping][city]', 'addresses[city]', 'town/city']);
  nameValueMap.propagate('state',        ['addresses[billing][state]', 'addresses[shipping][state]', 'addresses[state]', 'town/city']);
  nameValueMap.propagate('zip',          ['addresses[billing][zip]', 'addresses[shipping][zip]', 'addresses[zip]', 'zip code','zipcode', 'postal', 'postcode', 'post code']);
  nameValueMap.propagate('email',        ['email address', 'emailaddress']);
  nameValueMap.propagate('phone',        ['addresses[billing][phone]', 'addresses[shipping][phone]', 'addresses[phone]', 'phone number']);
  nameValueMap.propagate('cvv',          ['svc', 'security code']);
  nameValueMap.propagate('number',       ['card number']);

  jj.nameValueMap = nameValueMap;

})(window);
