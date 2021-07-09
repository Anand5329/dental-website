$(document).ready(function () {
  scrollToTreatment();
  $(document).scroll(function () {
    //console.log("Scrolling");
    var treatment = detectScroll();
    deactivateAll();
    activate(treatment);
  });
});

var deactivateAll = function() {
  $("#treatment-navbar a").removeClass("active");
};

var activate = function(treatment) {
  $("a[scroll='" + treatment + "']").addClass("active");
};

var detectScroll = function() {
    var scroll = $(document).scrollTop();
    var baseHeight = $("nav").height() + $("#top").height();
    scroll += baseHeight;
    //console.log("Scroll: " + scroll);

    var treatments = $("#treatment-content div");
    //console.log(treatments);

      var height = baseHeight;

    for (var treatment of treatments) {
      height += $(treatment).height();
      // console.log(height);
      if (height > scroll) {
        return $(treatment).attr("id");
      }
    }
    return "last one";
};

var scrollToTreatment = function(treatment) {
  //console.log(treatment);
  var baseHeight = $("nav").height() + $("#top").height();
  if (treatment) {
  var scrollPos = $("#"+treatment).offset().top - baseHeight;

  window.scrollTo(0, scrollPos);
  //$("body").animate({ scrollTop: vertical }, 200);
  }
};
