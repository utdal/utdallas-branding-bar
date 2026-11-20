/**
 * Prepend the branding bar to the body
 */
(function () {

  document.addEventListener("DOMContentLoaded", function () {
    let bar = document.getElementById('utdallas-branding-bar');
    let body = document.getElementsByTagName('body')[0];

    body.prepend(bar);
  });

})();
