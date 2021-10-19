/*
  Author: Adi Aryasuta
  Since: October 13, 2021
  Last modified: October 17, 2021
*/

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})