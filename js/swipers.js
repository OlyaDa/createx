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