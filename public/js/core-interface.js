var $item = $(".carousel .item");
var $wHeight = $(window).height();
$item.eq(0).addClass("active");
$item.height($wHeight);
$item.addClass("full-screen");

$(".carousel img").each(function() {
  var $src = "http://i.imgur.com/FkPPsOV.png";
  $(this).parent().css({
    "background-image": "url(" + $src + ")"
  });
  $(this).remove();
});

$(window).on("resize", function() {
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$(".carousel").carousel({
  interval: 100000,
  pause: "true",
});