if (document.addEventListener) {
    document.addEventListener("mousewheel", MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
    document.addEventListener("DOMMouseScroll", MouseWheelHandler, false); //Firefox
  } else {
    document.attachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
  }
  
  var i = 1;
  var mouseWheel = true;
  function MouseWheelHandler(e) {
    if (!mouseWheel) {
      return false;
    }
    mouseWheel = false;
    setTimeout(function() {
      mouseWheel = true;
    }, 200); // Stop mouse wheel event for 3 seconds
    e = window.event || e;
    var h = window.innerHeight;
    var section = document.getElementsByClassName("section");
    var delta = 1
    if (i <= section.length && i >= 0) {
      //scrolling down?
      if (delta ==1) {
        window.scrollTo({
          top: h * i,
          behavior: "smooth"
        });
        i++;
        delta=0;
      } else {
        //scrolling up?
        window.scrollTo({
          top: h * i,
          behavior: "smooth"
        });
        i--;
        delta=1;
      }
    } else {
      i = 1;
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  }
  