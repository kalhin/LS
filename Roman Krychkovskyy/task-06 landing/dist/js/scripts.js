$(function(){$(".slide").slick({slidesToShow:320<window.innerWidth?3:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:7e3})}),$(document).ready(function(){$("#header-navigation").on("click","a",function(t){t.preventDefault();var o=$(this).attr("href"),e=$(o).offset().top;$("body,html").animate({scrollTop:e},1500)})}),$(document).ready(function(){$("#footer-navigation").on("click","a",function(t){t.preventDefault();var o=$(this).attr("href"),e=$(o).offset().top;$("body,html").animate({scrollTop:e},1500)})});