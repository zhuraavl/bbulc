


window.addEventListener( 'load', function() {
  var box = document.getElementById('scaler'),
      docHeight = document.documentElement.offsetHeight;
  
  window.addEventListener( 'scroll', function() {
        // normalize scroll position as percentage
    var scrolled = 1 + window.scrollY / ( docHeight - window.innerHeight ),
        transformValue = 'scale('+scrolled+')';

    box.style.WebkitTransform = transformValue;
    box.style.MozTransform = transformValue;
    box.style.OTransform = transformValue;
    box.style.transform = transformValue;
    
  }, false);
  
}, false);


$(document).ready(function () {


  



  //.css('transform', 'scale(' + scaleAmt + ')');
  
  
  
  $(".menu-open button").click(function () {
    $(".off-canvas-header").toggleClass('show');
    $(this).toggleClass('active');
  });


  $('.slider-deals').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
    pauseOnHover: false,
    cssEase: 'ease-in-out',
    asNavFor: '.slider-deals-item'
  });
  $('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: 'ease-in-out',
  });
  $('.partner-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    dots: false,
    autoplay: true,
    arrows: false,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
  $('.slider-deals-item').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    centerMode: true,
    dots: false,
    speed: 1000,
    asNavFor: '.slider-deals',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
  $('.item-slider-pic').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '100px',
    arrows: false,
    cssEase: 'ease-in-out',
    dots: true,
    speed: 1000
  });

});