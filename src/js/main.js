class Project {
  constructor(title, img, urlHosted, urlGithub, description, skills) {
    (this.title = title),
      (this.img = img),
      (this.urlHosted = urlHosted),
      (this.urlGithub = urlGithub),
      (this.description = description),
      (this.skills = skills);
  }
}
const projectsArr = [
  new Project(
    'Rock Papper Scissors',
    './images/rps.png',
    'https://keanu2431.github.io/Rock-Paper-Scissors-FInal/',
    'https://github.com/Keanu2431/Rock-Paper-Scissors-FInal.git',
    'Simple JavaScript game that is powered by a random number generator function to keep things random when playing against the computer. This was one of my first projects that so it means alot to me even though it is relatively simple. This project made me realize how far I have come and learned to spot bad code.',
    ['JavaScript', 'HTML', 'CSS', 'Procedural']
  ),
  new Project(
    'Lumpkins Delights',
    './images/restaurant.png',
    'https://keanu2431.github.io/Restaurant-Lumpkin/',
    'https://github.com/Keanu2431/Restaurant-Lumpkin.git',
    'For this project I wanted to venture out and make my first proper static website to familiarize myself with HTML,CSS and Bootstrap more. Choosing to create a restaurant website was a good starting point because it allowed me to envision something that a customer or client would want and find useful instead of something that only I would find usefull.',
    ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
  ),

  new Project(
    'Stock Charting',
    './images/stock.png',
    'https://keanu2431.github.io/Stock-Charting/',
    'https://github.com/Keanu2431/Stock-Charting.git',
    'This project in essence is a stock chart that allows you to search up stocks and view the desired stock. Add stocks to the watchlist and remove them from the watchlist, and also allowing people to see different time frames of the chart. It givess users an idea of where they may want to buy in or sell based off of the key levels created by my algorithm',
    ['OOP', 'API', 'Algorithm', 'JSCharting', 'Libraries']
  ),
  new Project(
    'Noire',
    // image hosted online
    './images/noire.png',
    // image hosted online
    'https://github.com/Keanu2431/Noire.git',
    'https://www.lumpkinstudios.com/',
    'This is a work in progress implementing the use of databases ,OOP, MVC architecture for manageable code alongside many other concepts of programming. I am currently in the process of converting what I currently have into a web application that is supported on the front-end and the back-end to apply every concept I learned to allow the application to function properly with data being stored and accessible from anywhere.',
    ['E-Commerce', 'OOP', 'Validation', 'Database', 'JSON']
  ),
];
const contactForm = document.querySelector(`.contact-form`);
const nameContact = document.querySelector(`#name`);
const email = document.querySelector(`#email`);
const message = document.querySelector(`#message`);
const nav = document.querySelector(`.navigation`);
const home = document.querySelector(`#home`);
const projects = document.querySelector(`#projects`);
const contact = document.querySelector(`#contact`);
const portCont = document.querySelector('.row-cols-2');
const imgContainer = document.querySelectorAll(`.col`);
//
//
// POPULATING PROJECTS
(function () {
  projectsArr.forEach(function (el) {
    const html = `<div class="col">
    <div class="project-temp">
      <div class="img-container">
      <img data-target="${el.title.split(' ').join('-')}" src="${
      el.img
    }" alt="${el.title}" srcset="">
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-target="${el.title
          .split(' ')
          .join('-')}" class="ghost pop_up" > &#60;see more&#62;</button>
      </div>
      <h2>${el.title}</h2>
    </div>`;
    portCont.insertAdjacentHTML('afterbegin', html);
  });
})();

// CONTACT SUBMIT
if (contactForm)
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = {
      name: nameContact.value,
      email: email.value,
      subject: 'LumpkinStuios Inquiry',
      message: message.value,
    };
    console.log(formData);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    console.log(xhr.responseText);
    xhr.onload = function () {
      if (xhr.responseText == 'success') {
        console.log('email sent');
        nameContact.value = '';
        email.value = '';
        message.value = '';
      } else {
        console.log(`error`);
      }
    };
    xhr.send(JSON.stringify(formData));
  });
// HIDING HTML
window.addEventListener('hashchange', function (e) {
  e.preventDefault();
  const page = window.location.hash;
  console.log(page);
  if (page === `#contact`) {
    home.classList.add(`hidden`);
    projects.classList.add(`hidden`);
    contact.classList.remove(`hidden`);
    contact.classList.add(`fade-in`);
  } else if (page === `#home`) {
    contact.classList.add(`hidden`);
    projects.classList.add(`hidden`);
    home.classList.remove(`hidden`);
    home.classList.add(`fade-in`);
  } else if (page === `#portfolio`) {
    home.classList.add(`hidden`);
    contact.classList.add(`hidden`);
    projects.classList.remove(`hidden`);
    projects.classList.add(`fade-in`);
  }
});
if (imgContainer) {
  imgContainer.forEach((el) => {
    el.addEventListener('mouseover', function () {
      alert(`hovered`);
    });
  });
}
// fade in
window.addEventListener('mouseover', function (e) {
  if (e.target.dataset.target) {
    const currTarget = e.target;
    const seeMore = document.querySelectorAll(`.ghost`);
    const btnArr = Array.from(seeMore);
    btnArr.forEach((el) => {
      if (el.dataset.target == currTarget.dataset.target) {
        el.classList.add('fade-in-btn');
        // console.log(el);
      }
    });
  }
});
window.addEventListener('mouseout', function (e) {
  if (e.target.dataset.target) {
    const currTarget = e.target;
    const seeMore = document.querySelectorAll(`.ghost`);
    const btnArr = Array.from(seeMore);
    btnArr.forEach((el) => {
      if (el.dataset.target == currTarget.dataset.target) {
        el.classList.remove('fade-in-btn');
        // console.log(el);
      }
    });
  }
});
window.addEventListener('click', function (e) {
  const clicked = e.target;
  const popUp = this.document.querySelector(`.modal-body`);
  // let i;
  const pushHTML = function (i) {
    popUp.innerHTML = `
    <div id="left">
      <h1>${projectsArr[i].title}</h1>
      <div class="mini-container">
        <img src="${projectsArr[i].img}"/>
        <a href="${
          projectsArr[i].urlGithub
        }" target="_blank"><button >&#60code/&#62 </button></a>
        <a href="${
          projectsArr[i].urlHosted
        }" target="_blank"><button >&#60demo/&#62 </button></a>
      </div>
    </div>
    <div id="right">
      <div id="tech-div"> 
        <h4 class="tech-item">${projectsArr[i].skills[0]}</h4>
        <h4 class="tech-item">${projectsArr[i].skills[1]}</h4>
        <h4 class="tech-item">${projectsArr[i].skills[2]}</h4>
        <h4 class="tech-item">${projectsArr[i].skills[3]}</h4>
        ${
          projectsArr[i].skills > 4
            ? `<h4 class="tech-item">${projectsArr[i].skills[4]}</h4>`
            : ''
        }   
      </div>
      <p>${projectsArr[i].description}</p>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="close-btn">Close</button>
    </div>`;
  };

  if (clicked.dataset.target == 'Rock-Papper-Scissors') {
    popUp.innerHTML = '';
    pushHTML(0);
  } else if (clicked.dataset.target == 'Lumpkins-Delights') {
    popUp.innerHTML = '';
    pushHTML(1);
  } else if (clicked.dataset.target == 'Stock-Charting') {
    popUp.innerHTML = '';
    pushHTML(2);
  } else if (clicked.dataset.target == 'Noire') {
    popUp.innerHTML = '';
    // index of el in the array
    pushHTML(3);
  }
});
// hover over image make closest btn unhidden
