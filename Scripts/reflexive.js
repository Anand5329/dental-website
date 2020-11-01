var isMob = false;

$(document).ready(function() {
  isMob = isMobile();

  $(window).resize(function(){
    isMob = isMobile();
    if(isMob)
    toMob();
    else
    toDesktop();
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
  var sidenav = $(".sidenav");
  sidenav.hide();
}

toDesktop = function() {
  var sidenav = $(".sidenav");
  sidenav.show();
}
