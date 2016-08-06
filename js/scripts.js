/*==========================================*/
    $(document).ready(function(){
      $(".header-top").removeClass("default");
      $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
          $(".header-top").addClass("default").fadeIn('fast');
        } else {
          $(".header-top").removeClass("default").fadeIn('fast');
        };
      });
    });
