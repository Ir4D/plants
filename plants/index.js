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
  });
});

/* ****************************** */
/* PRICES ACCORDION */
/* ****************************** */

const imgBlock = document.querySelectorAll('.block-img');
const bodyBlock = document.querySelectorAll('.block-body');

document.querySelector('.block-btn__basics').addEventListener('click', function() {
  document.querySelector('.block-basics').classList.toggle('opened');
  if (document.querySelector('.block-btn__standard').classList.contains('btn-opened')) {
    document.querySelector('.block-standard').classList.toggle('opened');
    document.querySelector('.block-btn__standard').classList.toggle('btn-opened');
    for (let i = 0; i < bodyBlock.length; i++) {
      bodyBlock[1].classList.toggle('opened');
    }
  } else if (document.querySelector('.block-btn__pro').classList.contains('btn-opened')) {
    document.querySelector('.block-pro').classList.toggle('opened');
    document.querySelector('.block-btn__pro').classList.toggle('btn-opened');
    for (let i = 0; i < bodyBlock.length; i++) {
      bodyBlock[2].classList.toggle('opened');
    }
  }
  document.querySelector('.block-btn__basics').classList.toggle('btn-opened');
  for (let i = 0; i < bodyBlock.length; i++) {
    bodyBlock[0].classList.toggle('opened');
  }
});

document.querySelector('.block-btn__standard').addEventListener('click', function() {
  document.querySelector('.block-standard').classList.toggle('opened');
  if (document.querySelector('.block-btn__basics').classList.contains('btn-opened')) {
    document.querySelector('.block-basics').classList.toggle('opened');
    document.querySelector('.block-btn__basics').classList.toggle('btn-opened');
    for (let i = 0; i < bodyBlock.length; i++) {
      bodyBlock[0].classList.toggle('opened');
    }
  } else if (document.querySelector('.block-btn__pro').classList.contains('btn-opened')) {
    document.querySelector('.block-pro').classList.toggle('opened');
    document.querySelector('.block-btn__pro').classList.toggle('btn-opened');
    for (let i = 0; i < bodyBlock.length; i++) {
      bodyBlock[2].classList.toggle('opened');
    }
  }
  document.querySelector('.block-btn__standard').classList.toggle('btn-opened');
  for (let i = 0; i < bodyBlock.length; i++) {
    bodyBlock[1].classList.toggle('opened');
  }
});

document.querySelector('.block-btn__pro').addEventListener('click', function() {
  document.querySelector('.block-pro').classList.toggle('opened');
  if (document.querySelector('.block-btn__standard').classList.contains('btn-opened')) {
    document.querySelector('.block-standard').classList.toggle('opened');
    document.querySelector('.block-btn__standard').classList.toggle('btn-opened');
    for (let i = 0; i < bodyBlock.length; i++) {
      bodyBlock[1].classList.toggle('opened');
    }
  } else if (document.querySelector('.block-btn__basics').classList.contains('btn-opened')) {
    document.querySelector('.block-basics').classList.toggle('opened');
    document.querySelector('.block-btn__basics').classList.toggle('btn-opened');
    for (let i = 0; i < bodyBlock.length; i++) {
      bodyBlock[0].classList.toggle('opened');
    }
  }
  document.querySelector('.block-btn__pro').classList.toggle('btn-opened');
  for (let i = 0; i < bodyBlock.length; i++) {
    bodyBlock[2].classList.toggle('opened');
  }
});

const btnPrices = document.querySelectorAll('.block-btn');

btnPrices.forEach(item => {
  item.addEventListener('click', function() {
    document.querySelector('.section-contacts').scrollIntoView({
      block: "start", 
      behavior: "smooth"
    });
  });
})

/* ****************************** */
/* CONTACTS SELECTION */
/* ****************************** */

document.querySelector('.city-img').addEventListener('click', function() {
  document.querySelector('.select-head').classList.toggle('active');
  document.querySelector('.city-img').classList.toggle('opened');
  document.querySelector('.select-body').classList.toggle('opened');
});

const selectItem = document.querySelectorAll('.select-item');
const cityText = document.querySelector('.city-text');

selectItem.forEach(item => {
  item.addEventListener('click', function() {
    document.querySelector('.city-img').classList.toggle('opened');
    document.querySelector('.select-body').classList.toggle('opened');

    cityText.innerText = this.innerText;
    cityText.style.fontSize = '1.6rem';
    document.querySelector('.select-head').classList.add('active');

    if (item.firstElementChild.innerText == "Canandaigua, NY") {
      document.querySelector('.city-newyork').style.display = 'none';
      document.querySelector('.city-yonkers').style.display = 'none';
      document.querySelector('.city-sherrill').style.display = 'none';
      document.querySelector('.city-canandaigua').style.display = 'block';
      if (window.matchMedia('(max-width: 66em)').matches) {
        document.querySelector('.contacts-img').style.display = 'none';
      };
    } else if (item.firstElementChild.innerText == 'New York City') {
      document.querySelector('.city-canandaigua').style.display = 'none';
      document.querySelector('.city-yonkers').style.display = 'none';
      document.querySelector('.city-sherrill').style.display = 'none';
      document.querySelector('.city-newyork').style.display = 'block';
      if (window.matchMedia('(max-width: 66em)').matches) {
        document.querySelector('.contacts-img').style.display = 'none';
      };
    } else if (item.firstElementChild.innerText == 'Yonkers, NY') {
      document.querySelector('.city-canandaigua').style.display = 'none';
      document.querySelector('.city-newyork').style.display = 'none';
      document.querySelector('.city-sherrill').style.display = 'none';
      document.querySelector('.city-yonkers').style.display = 'block';
      if (window.matchMedia('(max-width: 66em)').matches) {
        document.querySelector('.contacts-img').style.display = 'none';
      };
    } else if (item.firstElementChild.innerText == 'Sherrill, NY') {
      document.querySelector('.city-canandaigua').style.display = 'none';
      document.querySelector('.city-newyork').style.display = 'none';
      document.querySelector('.city-yonkers').style.display = 'none';
      document.querySelector('.city-sherrill').style.display = 'block';
      if (window.matchMedia('(max-width: 66em)').matches) {
        document.querySelector('.contacts-img').style.display = 'none';
      };
    };
  });
});

console.log(
  "Все требования к вёрстке соблюдены: оценка за задание 100 баллов:\n\
  1. При нажатии на кнопки:Gargens, Lawn, Planting происходит смена фокуса на услугах в разделе service +50:\n\
   - При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20\n\
   - Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка) +20\n\
   - Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10\n\
  2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50:\n\
   - При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым +25\n\
   - Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается +25\n\
  3. В разделе contacts реализован select с выбором городов +25:\n\
   - В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15\n\
   - При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10"
)