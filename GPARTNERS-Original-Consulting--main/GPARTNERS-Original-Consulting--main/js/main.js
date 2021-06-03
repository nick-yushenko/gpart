const templates = (document.querySelector('.templates')) ? document.querySelector('.templates') : document.body

const anchors = document.querySelectorAll('a.anchor')
if (anchors)
  anchors.forEach(function (item) {
    item.addEventListener('click', function () {
      let blockID = item.getAttribute('href').substring(1)
      let paddingTop = $('#' + blockID).css('padding-top')
      paddingTop = paddingTop.substr(0, paddingTop.length - 2)
      $("html, body").animate({
        scrollTop: $('#' + blockID).offset().top + Number(paddingTop) - 10 - headerHeight + "px"
      }, {
        duration: 500,
        easing: "swing"
      });
    })
  })


const burger = document.querySelector('.js-burger')
const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu li')

burger.addEventListener('click', function (e) {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
})

menuItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
  })
})


document.addEventListener('scroll', function (e) {
  if (getBodyScrollTop() > 50)
    document.querySelector('.header').classList.add('scrolled')
  else
    document.querySelector('.header').classList.remove('scrolled')

})

function getBodyScrollTop() {
  var h = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
  return h
}


if (document.querySelector('#profileSlider')) {
  let profileSlideOffset = (window.innerWidth - document.querySelector('#wrap').clientWidth) / 2
  const profileSlider = new Swiper('#profileSlider', {
    speed: 400,
    direction: 'horizontal',
    slidesPerView: "auto",
    slidesOffsetBefore: profileSlideOffset,
    slidesOffsetAfter: profileSlideOffset,
    spaceBetween: 25,

  });
}