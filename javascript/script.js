
// CART MENU
document.querySelector('#open-popup').addEventListener('click', () => {
  document.querySelector('.pop-up').classList.add('active-popup');
  document.querySelector('main').classList.add('bg-blur');
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.querySelector('.pop-up').classList.remove('active-popup');
});

// MOBILE menu
function toggleMobileButton(){
  document.getElementById('mobile-icon').classList.toggle('hamburger-opened');

  document.getElementById('mobile-menu').classList.toggle('mobile-menu-opened');
}

// SLIDER

const slidesContainer = document.getElementById('slides-container');
const slide = document.querySelector('.slide');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');

nextButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});


const slidesContainer2 = document.getElementById('slides-container-2');
const slide2 = document.querySelector('.slide-2');
const prevButton2 = document.getElementById('slide-arrow-prev-2');
const nextButton2 = document.getElementById('slide-arrow-next-2');

nextButton2.addEventListener('click', () => {
  const slideWidth2 = slide2.clientWidth;
  slidesContainer2.scrollLeft += slideWidth2;
});

prevButton2.addEventListener('click', () => {
  const slideWidth2 = slide2.clientWidth;
  slidesContainer2.scrollLeft -= slideWidth2;
});


// CUSTOM CURSOR
// let innerCursor = document.querySelector('.inner-cursor');
// let outerCursor = document.querySelector('.outer-cursor');
//
// document.addEventListener('mousemove', moveCursor);
//
// function moveCursor(e){
//   let x = e.clientX;
//   let y = e.clientY;
//   console.log(x, y);
//
//   innerCursor.style.left = `${x}px`;
//   innerCursor.style.top = `${y}px`;
//   outerCursor.style.left = `${x}px`;
//   outerCursor.style.top = `${y}px`;
// }

// const cursor = document.querySelector('.cursor');
// const cursorinner = document.querySelector('.cursor2');
// const a = document.querySelectorAll('a');
//
// document.addEventListener('mousemove', (e) => {
//   const x = e.clientX;
//   const y = e.clientY;
//   cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%),
// calc(${e.clientY}px - 50%), 0)`;
// // });
// //
// // document.addEventListener('mousemove', (e) => {
// //   const x = e.clientX;
// //   const y = e.clientY;
// //   cursorinner.style.left = `${x}px`;
// //   cursorinner.style.top = `${y}px`;
// });
//
// document.addEventListener('mousedown', () => {
//   cursor.classList.add('click');
//   cursorinner.classList.add('cursorinnerhover');
// });
//
// document.addEventListener('mouseup', () => {
//   cursor.classList.remove('click');
//   cursorinner.classList.remove('cursorinnerhover');
// });
//
// a.forEach(item => {
//   item.addEventListener('mouseover', () => {
//     cursor.classList.add('hover');
//   });
//   item.addEventListener('mouseleave', () => {
//     cursor.classList.remove('hover');
//   });
// });
