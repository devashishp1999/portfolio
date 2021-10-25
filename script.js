`use strict`;

const buttonDemo = document.querySelector(`.prj--1`);
const projectWrapper = document.querySelector(`.project-wrapper`);
const about = document.querySelector(`#about-para`);

myBio = `Solution-driven Web Developer adept at contributing to highly collaborative work environment. Front-end Web Development is the my field of interest as a Computer Science Engineering graduate. I have good knowledge of JavaScript, HTML & CSS. I develope awesome websites using these technologies. Please have a look at My Projects.  `;
about.textContent = myBio;

buttonDemo.addEventListener(`click`, function () {
  window.open(`https://devashishp1999.github.io/infinecolors`, '_blank');
});
