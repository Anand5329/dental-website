var isMob = false;

$(document).ready(function() {
  isMob = isMobile();
  changeMode(isMob);

  $(window).resize(function(){
    isMob = isMobile();
    changeMode(isMob);
  });

});

isMobile = function() {
  var width = $(window).width();
  var height = $(window).height();
  var ratio = width/height;

    //console.log("isMobile: ");
  if(ratio < 1)
  {
    //console.log("true");
    return true;
  }
  else {
    //console.log("false");
    return false;
  }
}

toMob = function() {
  var sidebar = $(".sidenav");
  sidebar.hide();

  var content = $(".content");
  content.css("margin-left","0");

  var h1 = $("h1");
  h1.css("font-size", "4rem")
  h1.addClass("wrap");

  var h4 = $("h4")
  h4.css("font-size", "2rem")

  var p = $("p")
  p.css("font-size", "1rem");

  var pad = $(".pad10");
  pad.css("padding", "1rem")
}

toDesktop = function() {
  var sidebar = $(".sidenav");
  sidebar.show();

  var content = $(".content");
  content.css("margin-left","300px");

  var h1 = $("h1");
  h1.css("font-size", "7rem")
  h1.removeClass("wrap");

  var h4 = $("h4")
  h4.css("font-size", "4rem")

  var p = $("p")
  p.css("font-size", "2rem");

  var pad = $(".pad10");
  pad.css("padding", "2rem 10rem")
}

changeMode = function(isMob) {
  if(isMob)
  toMob();
  else
  toDesktop();
}
