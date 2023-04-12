const links = document.querySelector(`.links`);
const navBtn = document.querySelector(`.nav-btn`);

navBtn.addEventListener(`click`, function (e) {
  links.classList.toggle(`show-links`);
});
