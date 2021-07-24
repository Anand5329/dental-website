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
  $("body").addClass('mobile');

  var sidebar = $(".sidenav");
  sidebar.hide();
}

toDesktop = function() {
  $("body").removeClass('mobile');

  var sidebar = $(".sidenav");
  sidebar.show();
}

changeMode = function(isMob) {
  if(isMob)
  toMob();
  else
  toDesktop();
}
