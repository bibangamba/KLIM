$(function() {
  $("ul.nav.navbar-nav li").on("click", function() {
    $("ul.nav.navbar-nav li").removeClass("active");
    $(this).addClass("active");
  });
  
});