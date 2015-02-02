// var filesPath = [
//   'lib/helpers.js',
//   'lib/external/jquery.js',
//   'content_scripts/utilities/form_populator/formValues.js',
//   'content_scripts/utilities/form_populator/nameValueMap.js',
//   'content_scripts/utilities/form_populator/controller.js'
// ];
//
// filesPath.forEach(function(file) {
//   injectScriptInTab(file);
// });
//
// function injectScriptInTab(filePath) {
//   chrome.tabs.executeScript({
//     file  : filePath,
//     runAt : 'document_end'
//   });
// }

function runScriptInTab(script) {
  chrome.tabs.executeScript({
    code  : script
  });
}

function popForm() {
  runScriptInTab('jj.popForm();');
}

// keep auto-fill checkbox sync
chrome.storage.sync.get('isAutoFillForm', function(item) {
  $('.auto-fill').prop('checked', !!item.isAutoFillForm);
});

// popup.html button events
$('.pop-buttons').on('click', '.pop-form', function() {
  popForm();
});

$('.auto-fill').on('change', function() {
  var isChecked = $(this).is(':checked');
  chrome.storage.sync.set({'isAutoFillForm': isChecked});
});
