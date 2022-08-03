const bodyStyles = window.getComputedStyle(document.body);
gap = parseInt(bodyStyles.getPropertyValue("--grid-gap"));

const portfolioSlider = new Swiper('.portfolio-section__items', {
    slidesPerView: 1,
    spaceBetween: gap,
    loop: true,
    navigation: {
        nextEl: '.portfolio-section__next',
        prevEl: '.portfolio-section__prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
    }
});

const heroSliderSpeed = 1500;

const bodyStyle = window.getComputedStyle(document.body);
const fooBar = bodyStyle.getPropertyValue('--hero-slider-speed'); //get

document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms');//set

const heroSlider = new Swiper('.hero-slider', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.hero__next',
        prevEl: '.hero__prev',
    },
    speed: heroSliderSpeed,
    pagination: {
        el: '.hero__pag',
        type: 'bullets',
        clickable: true
    },
    on: {
        init: function () {
            const paginationBullets = document.querySelectorAll('.hero__pag .swiper-pagination-bullet');

            paginationBullets.forEach(el => {
                el.innerHTML = `<span class="hero__bar"></span>`;
            });
        },
    },
});

const testimonialsSlider = new Swiper('.testimonials__items', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },
});

const relatedprojectsSlider = new Swiper('.related-projects__items', {
    slidesPerView: 1,
    spaceBetween: gap,
    loop: true,
    navigation: {
        nextEl: '.related-projects__next',
        prevEl: '.related-projects__prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

const workImages = document.querySelector('.work-images-slider');

const workSliderNav = new Swiper(".work-images-nav", {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        576: {
            slidesPerView: 6,
        },
        768: {
            slidesPerView: 10,
        }
    }
});
const workSlider = new Swiper(workImages, {
    spaceBetween: 10,
    navigation: {
        nextEl: ".work-images__next",
        prevEl: ".work-images__prev",
    },
    thumbs: {
        swiper: workSliderNav,
    },
});


const historySlider = document.querySelector('.history-slider');

if (historySlider) {
    const workSlider = new Swiper(historySlider, {
        slidesPerView: 1,
        navigation: {
            nextEl: ".history__next",
            prevEl: ".history__prev",
        },
    });

    workSlider.on('slideChange', function () {
        console.log(workSlider.realIndex);

        historyBtns.forEach(el => {
            el.classList.remove('history-nav__btn--active');
        });

        document.querySelector(`.history-nav__btn[data-index="${workSlider.realIndex}"]`).classList.add('history-nav__btn--active');
    });

    const historyBtns = document.querySelectorAll('.history-nav__btn');

    historyBtns.forEach((el, idx) => {
        el.setAttribute('data-index', idx);

        el.addEventListener('click', (e) => {
            const index = e.currentTarget.dataset.index;

            historyBtns.forEach(el => {
                el.classList.remove('history-nav__btn--active');
            });

            e.currentTarget.classList.add('history-nav__btn--active');

            workSlider.slideTo(index);
        });
    });
}
