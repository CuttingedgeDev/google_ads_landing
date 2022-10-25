// event of resize dom
var state = 0;

// function resizeFunc() {
//   var w = window.outerWidth;
//   var h = window.outerHeight;
//   if (w > 767 & state == 0) { 
//     state = 1;
//     // document.getElementById('marketingSlide').classList.remove('marketingSlide');
    
//     console.log("big");

    
//   } else if (w < 767 & state == 1) {
//     state = 0;
//     console.log("small");

//     // document.getElementById('marketingSlide').classList.add('marketingSlide');


//     $(document).ready(function(){
//       $('.marketingSlide').slick({
//         infinite: true,
//         speed: 500,
//         fade: true,
//         cssEase: 'linear',
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//       });
//     });

//     // $(document).ready(function(){
//     //   $('.familierSlide').slick({

//     //     autoplay: true,
//     //     autoplaySpeed: 3000,
//     //   });
//     // });
//   }
// }

// slide init
if ( window.outerWidth > 767) {
  // document.getElementById('marketingSlide').classList.remove('marketingSlide');

} else {
  // document.getElementById('marketingSlide').classList.add('marketingSlide');

  $(document).ready(function(){
    $('.marketingSlide').slick({
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    });

    $('.familierSlide').slick({
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    });

  });

}

