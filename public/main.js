import smoothscroll from 'smoothscroll-polyfill';
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;
