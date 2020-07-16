// FOR EMAIL LEASE DON'T EDIT
(function ($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
})(jQuery);
var $mcj = jQuery.noConflict(true);

// PDF HIDDEN TO SHOWN
document.querySelector(".button").addEventListener("click", function () {
  document.querySelector(".pdf-file").style.display = "block";
});
