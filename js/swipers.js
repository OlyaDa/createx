const bodyStyles = window.getComputedStyle(document.body);
gap = parseInt(bodyStyles.getPropertyValue("--grid-gap"));

const portfolioSlider = new Swiper('.portfolio-section__items', {
    slidesPerView: 3,
    spaceBetween: gap,
    loop: true,
    navigation: {
        nextEl: '.portfolio-section__next',
        prevEl: '.portfolio-section__prev',
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
    slidesPerView: 3,
    spaceBetween: gap,
    loop: true,
    navigation: {
        nextEl: '.related-projects__next',
        prevEl: '.related-projects__prev',
    },
});

const workImages = document.querySelector('.work-images-slider');

const workSliderNav = new Swiper(".work-images-nav", {
    spaceBetween: 20,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
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
