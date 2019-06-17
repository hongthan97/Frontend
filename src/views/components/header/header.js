const Header = {
  toggleDropDownMenu: () => {
    $(".hamburger").on("click", function () {
      $(this).toggleClass("menu_active");
      $('.main-menu nav ul').toggle(200, 'linear');    
    });
  },

  fixedMenu: () => {
    var navbarFix = $("#js-navbar-fixed");
    var headerOffset = navbarFix.offset().top + 100;
    $(window).on('scroll',function () {
        if ($(window).scrollTop() > headerOffset) {
            navbarFix.addClass('fixed').removeClass("unfixed");
        } else {
            navbarFix.addClass('unfixed').removeClass("fixed");
        }
    });
  },

};
export default Header;
