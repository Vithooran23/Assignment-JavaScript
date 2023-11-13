
var moon = document.getElementById("moon");

moon.onclick = function clickButton() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
     moon.src = "Assest/Photos/sun.svg" ;
    }else {
       moon.src= "Assest/Photos/moon.svg";
    }
}

// Section 5 Cliet review

// map
function initMap() {
  var options= {
    zoom:50,
    center:{lat:9.657770,lng:80.159210}
  }
  var googlemap = new google.maps.Map(document.getElementById("map"), options);
}

 
// const swiper = new Swiper('.js-testminoals-slider', {
//     // Optional parameters
//     // direction: 'vertical',
//     grapCursor: true,
//     spaceBetween :20,
//     pagination: {
//       el: '.js-testminoals-pagination',
//       clickable:true,
//     },
//     // autoPlay: {
//     //   Delay:7000,
//     //   disableOnInteraction:false,
//     // },

//     // centerSlides:true,
//     breakPoints: {
//       0: {
//         slidePerview:1,
//       },
//       750:{
//         slidesPerview:2,
//       },
//       1050: {
//         slidesPerview:3,
//       },

//     }

//   })

  
    // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });

