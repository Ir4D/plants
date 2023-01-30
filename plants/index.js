/* ****************************** */
/* BURGER MENU */
/* ****************************** */

const burgerMenu = document.querySelector(".burger-menu");
const navList = document.querySelector(".nav-list");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navList.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((elem) =>
  elem.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    navList.classList.remove("active");
  })
);

document.querySelectorAll(".main").forEach((elem) =>
  elem.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    navList.classList.remove("active");
  })
);

document.querySelectorAll(".logo-box").forEach((elem) =>
  elem.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    navList.classList.remove("active");
  })
);

/* ****************************** */
/* ACTIVATED SERVICES */
/* ****************************** */

const btnService = document.querySelectorAll('.service-btn');
const btnGarden = document.querySelector('.btn-garden');
const btnPlanting = document.querySelector('.btn-planting');
const btnLawn = document.querySelector('.btn-lawn');

const optionItem = document.querySelectorAll('.option-item');
const optionGarden = document.querySelectorAll('.option-garden');
const optionPlanting = document.querySelectorAll('.option-planting');
const optionLawn = document.querySelectorAll('.option-lawn');

let activeStatus = 0;

btnService.forEach(btn => {
  btn.addEventListener('click', function() {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
      activeStatus--;
    } else if (!btn.classList.contains('active') && activeStatus < 2) {
      btn.classList.add('active');
      activeStatus++;
    };
    for (let i = 0; i < optionItem.length; i++) {
      optionItem[i].style.transition = '0.7s';
      optionItem[i].style.filter = 'blur(2px)';
    };
    if (btnGarden.classList.contains('active')) {
      for (let i = 0; i < optionGarden.length; i++ ) {
        optionGarden[i].style.filter = '';
      };
    };
    if (btnPlanting.classList.contains('active')) {
      for (let i = 0; i < optionPlanting.length; i++ ) {
        optionPlanting[i].style.filter = '';
      };
    };
    if (btnLawn.classList.contains('active')) {
      for (let i = 0; i < optionLawn.length; i++ ) {
        optionLawn[i].style.filter = '';
      };
    };
    if (activeStatus == 0) {
      for (let i = 0; i < optionItem.length; i++ ) {
        optionItem[i].style.filter = '';
      };
    }
    console.log(activeStatus);
  });
});