$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  
  $(function () {
    var platform = navigator.platform.toLowerCase();
    if (platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) {
      if ($.browser.webkit) {
        $.srSmoothscroll();
      }
    }
  });