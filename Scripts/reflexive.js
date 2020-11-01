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
}

toDesktop = function() {
  var sidebar = $(".sidenav");
  sidebar.show();

  var content = $(".content");
  content.css("margin-left","300px");
}

changeMode = function(isMob) {
  if(isMob)
  toMob();
  else
  toDesktop();
}
