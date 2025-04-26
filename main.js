// СЕЛЕКТ
function initSelectBox(selectBox) {
    const selected = selectBox.querySelector('.selected');
    const options = selectBox.querySelector('.options');
    const optionItems = selectBox.querySelectorAll('.option');
    const arrowIcon = selectBox.querySelector('.arrow-icon');

selected.addEventListener('click', () => {
    const isOpen = options.classList.contains('open');
    options.classList.toggle('open', !isOpen);
    arrowIcon.classList.toggle('arrow-rotate', !isOpen);
});

optionItems.forEach(option => {
    option.addEventListener('click', () => {
    selected.querySelector('span').innerText = option.innerText;
    options.classList.remove('open');
    arrowIcon.classList.remove('arrow-rotate');
    });
});

document.addEventListener('click', (e) => {
    if (!selectBox.contains(e.target)) {
      options.classList.remove('open');
      arrowIcon.classList.remove('arrow-rotate');
    }
});
}

document.querySelectorAll('.imageSelect').forEach(initSelectBox);

$('.slider-3').on('afterChange', function() {
document.querySelectorAll('.imageSelect').forEach(initSelectBox);
});


// АКОРДИОН СНИЗУ FAQ

document.querySelectorAll('.faq-col').forEach(col => {
const questions = col.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.contains('open');

        col.querySelectorAll('.answer').forEach(a => {
            a.classList.remove('open');
            a.style.maxHeight = null;
        });

        col.querySelectorAll('.question-open img').forEach(img => {
            img.src = './img/plus-img.svg'; 
        });

        if (!isOpen) {
            answer.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + 'px';

            const icon = question.querySelector('.question-open img');
            icon.src = './img/minus-img.svg'; 
        }
    });
});


window.addEventListener('DOMContentLoaded', () => {
    col.querySelectorAll('.answer.open').forEach(answer => {
        answer.style.maxHeight = answer.scrollHeight + 'px';

        const icon = answer.previousElementSibling.querySelector('.question-open img');
        if (icon) {
            icon.src = './img/minus-img.svg';
        }
    });
});
});


// ПРОГРЕСС БАР
const slides = document.querySelectorAll('.bid-slider-item');
const prevBtn = document.getElementById('bid-slider-prev');
const nextBtn = document.getElementById('bid-slider-next');
let currentIndex = 0;

function updateSlider() {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);

        const currentText = slide.querySelector('.home-bid-slider-header b span');
        if (currentText) {
            currentText.textContent = String(currentIndex + 1).padStart(2, '0');
        }

        const progressFill = slide.querySelector('.progress-fill');
        if (progressFill) {
            const step = 100 / slides.length; // 100 / 5 = 20
            const percent = Math.round((currentIndex + 1) * step); // от 20 до 100
            progressFill.style.width = `${percent}%`;
        }
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slides.length - 1;

    prevBtn.classList.toggle('disabled', prevBtn.disabled);
    nextBtn.classList.toggle('disabled', nextBtn.disabled);
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

// начальная проверка
updateSlider();

// СЛАЙДЕР С АНИМАЦИОНЫМ ТОЧКАМИ





  
  
  
  
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-list');
const links = document.querySelectorAll('.menu-item');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".home-info-row");
  const dots = document.querySelectorAll(".dotes-button");
  const intervalTime = 8000;
  const fullDash = 62.8;
  let currentIndex = 0;
  let interval;
  const bg = document.querySelector(".bg");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    bg.classList.remove("bg-slide-0", "bg-slide-1");
    bg.classList.add(`bg-slide-${index}`);

  });

  dots.forEach((dot, i) => {
    const circle = dot.querySelector(".progress-ring-circle");

    dot.classList.toggle("active", i === index);

    if (circle) {
      // сброс
      circle.style.transition = "none";
      circle.style.strokeDashoffset = fullDash;
      void circle.offsetWidth; // "рефреш" рендера

      if (i === index) {
        // запуск новой анимации
        circle.style.transition = `stroke-dashoffset ${intervalTime}ms linear`;
        circle.style.strokeDashoffset = 0;
      }
    }
  });
}


  //   dots.forEach((dot, i) => {
  //     dot.classList.toggle("active", i === index);
  //     const circle = dot.querySelector(".progress-ring-circle");
  //     if (circle) {
  //       circle.style.transition = "none";
  //       circle.style.strokeDashoffset = fullDash;
  //       void circle.offsetWidth;
  //       if (i === index) {
  //         circle.style.transition = stroke-dashoffset `${intervalTime}ms linear`;
  //         circle.style.strokeDashoffset = 0;
  //       }
  //     }
  //   });
  // }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    showSlide(currentIndex);
    interval = setInterval(nextSlide, intervalTime);
  }

  function resetAutoSlide() {
    clearInterval(interval);
    interval = setInterval(nextSlide, intervalTime);
  }

  // Обработчики кликов
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
      resetAutoSlide();
    });
  });

  startAutoSlide();
});