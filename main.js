const tabs = document.querySelectorAll(".tab-menu li a");
const contents = document.querySelectorAll(".tab-contents li");

for (let i =0; i<tabs.length; i++) {
  tabs[i].addEventListener("click",function(e) {
    e.preventDefault();

    for(let j= 0; j<tabs.length; j++) {
      tabs[j].classList.remove("active");
    }
    for (let j= 0; j<tabs.length; j++) {
      contents[j].classList.remove("active");
  }

  this.classList.add("active");
  contents[i].classList.add("active");
  });
}

const slider1 = new Swiper('.slider1', {
  // Optional parameters
  loop: true,
  effect: 'fade',
  speed: 1000,

  autoplay: {
    delay: 2500
  },
  
})

const slider2 = new Swiper('.slider2', {
  // Optional parameters
  slidesPerView: 6,
  spaceBetween: 60,
  slidesPerGroup: 6,
  loopFillGroupWithBlank: true,
  paginationClickable: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

const slider3 = new Swiper('.slider3', {
  // Optional parameters
  spaceBetween: 60,

  autoplay:true,

  breakpoints: {
    '@0.00': {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    '@1.50': {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

const headerElement = document.getElementById('header-logo');

document.addEventListener('scroll', function(){
  const scrollY = window.pageYOffset;

  if (scrollY > 0) {
    headerElement.classList.add('active');
  } else {
    headerElement.classList.remove('active');
  }
});


