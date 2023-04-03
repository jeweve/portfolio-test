$(function () {
  $("#shoe").click(function () {
    $("#banner").toggleClass("active");
    // $("#banner").animate({"margin-left":"-250px"})
  });

  let target = $(".nav_left_menu a");
  $(function () {
    target.mouseover(function () {
      $(this).fadeTo("slow", 1, function () {
        // Animation complete.
      });
      target.not($(this)).fadeTo("slow", 0.5, function () {
        // Animation complete.
      });
    });

    target.mouseout(function () {
      target.fadeTo("slow", 1, function () {
        // Animation complete.
      });
    });
  });

  window.onscroll = function () {
    myFunction();
  };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  var wid = document.getElementsByClassName("nav_right")[0];
  var input = document.getElementById("inputbox");

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      wid.style.width = "550px";

      // input.style.display= "block";
    } else if (window.pageYOffset == 0) {
      // navbar.classList.remove("sticky");
      wid.style.width = "750px";
      input.style.width = "200px";
      navbar.classList.remove("sticky");
      // wid.style.width = "550px";
      input.style.display = "block";
      input.style.float = "left";
    } else {
      navbar.classList.remove("sticky");
      // wid.style.width = "550px";
      input.style.display = "none";
    }
  }
});
