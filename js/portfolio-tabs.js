// const portfolioTabsNav = document.querySelector('.portfolio-tabs-nav');
// const portfolioTabsBtns = document.querySelectorAll('.portfolio-tabs-nav__btn');
// const portfolioTabsItems = document.querySelectorAll('.portfolio-tabs__item');
// const portfolioTabsItemsVisible = document.querySelectorAll('.portfolio-tabs__item--visible');
// const loadMore = document.querySelector('.portfolio-more');
// const maxItems = 9;

// portfolioTabsNav.addEventListener('click', (e) => {
//     const target = e.target;
//     if (target.classList.contains('portfolio-tabs-nav__btn')) {

//         const path = target.dataset.path;

//         portfolioTabsBtns.forEach(el => { el.classList.remove('portfolio-tabs-nav__btn--active') });
//         target.classList.add('portfolio-tabs-nav__btn--active');

//         portfolioTabsItems.forEach(el => {
//             el.classList.remove('portfolio-tabs__item--visible')
//         });

//         document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
//             el.closest('.portfolio-tabs__item').classList.add('portfolio-tabs__item--visible')
//         });

//         if (path == 'all') {
//             portfolioTabsItems.forEach(el => {
//                 el.classList.add('portfolio-tabs__item--visible');
//             });
//         }
//     }
// });


//

// const portfolioTabsNav = document.querySelector('.portfolio-tabs-nav');
// const portfolioTabsBtns = document.querySelectorAll('.portfolio-tabs-nav__btn');
// const portfolioTabsItems = document.querySelectorAll('.portfolio-tabs__item');
// const portfolioTabsItemsVisible = document.querySelectorAll('.portfolio-tabs__item--visible');
// const loadMore = document.querySelector('.portfolio-more');
// const maxItems = 9;

// if (portfolioTabsNav) {
//     const isLoadMoreNeeded = (selector) => {
//         if (selector.length <= maxItems) {
//             loadMore.style.display = 'none';
//         } else {
//             loadMore.style.display = 'inline-flex';
//         }
//     };

//     const hideMoreItems = (selector) => {
//         if (selector.length > maxItems) {
//             const arr = Array.from(selector);
//             const hiddenItems = arr.slice(maxItems, selector.length);

//             hiddenItems.forEach(el => {
//                 el.classList.remove('portfolio-tabs__item--visible');
//                 el.classList.remove('portfolio-tabs__item--visible-more');
//             });
//         }
//     };

//     portfolioTabsNav.addEventListener('click', (e) => {
//         const target = e.target;
//         if (target.classList.contains('portfolio-tabs-nav__btn')) {
//             const path = target.dataset.path;

//             portfolioTabsBtns.forEach(el => { el.classList.remove('portfolio-tabs-nav__btn--active') });
//             target.classList.add('portfolio-tabs-nav__btn--active');

//             portfolioTabsItems.forEach(el => {
//                 el.classList.remove('portfolio-tabs__item--visible');
//                 el.classList.remove('portfolio-tabs__item--visible-more');
//             });

//             document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
//                 el.closest('.portfolio-tabs__item').classList.add('portfolio-tabs__item--visible');
//             });

//             isLoadMoreNeeded(document.querySelectorAll(`[data-target="${path}"]`));
//             hideMoreItems(document.querySelectorAll('.portfolio-tabs__item--visible'));

//             if (path == 'all') {

//                 portfolioTabsItems.forEach(el => {
//                     el.classList.add('portfolio-tabs__item--visible');
//                 });

//                 isLoadMoreNeeded(document.querySelectorAll('.portfolio-tabs__item--visible'));
//                 hideMoreItems(document.querySelectorAll('.portfolio-tabs__item--visible'));
//             }
//         }
//     });

//     hideMoreItems(portfolioTabsItems);
//     isLoadMoreNeeded(portfolioTabsItemsVisible);

//     loadMore.addEventListener('click', (e) => {
//         const visibleItems = document.querySelectorAll('.portfolio-tabs__item--visible');

//         const path = document.querySelector('.portfolio-tabs-nav__btn--active').dataset.path;
//         console.log(path)

//         if (path == 'all') {
//             portfolioTabsItems.forEach(el => {
//                 el.classList.add('portfolio-tabs__item--visible-more');
//                 loadMore.style.display = 'none';
//             });
//         } else {
//             document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
//                 el.closest('.portfolio-tabs__item').classList.add('portfolio-tabs__item--visible-more');
//             });
//             loadMore.style.display = 'none';
//         }
//     });
// }

// $(document).ready(function () {

//     var list = $(".portfolio-tabs li");
//     var numToShow = 9;
//     var button = $("#next");
//     var numInList = list.length;
//     list.hide();
//     if (numInList > numToShow) {
//         button.show();
//     }
//     list.slice(0, numToShow).show();

//     button.click(function () {
//         var showing = list.filter(':visible').length;
//         list.slice(showing - 1, showing + numToShow).fadeIn();
//         var nowShowing = list.filter(':visible').length;
//         if (nowShowing >= numInList) {
//             button.hide();
//         }
//     });

// });

//HTML CSS JSResult Skip Results Iframe
// "use strict";

// $(function () {
//     $(".portfolio-tabs__item").slice(0, 3).show();
//     $("body").on('click touchstart', '.load-more', function (e) {
//         e.preventDefault();
//         $(".portfolio-tabs__item:hidden").slice(0, 3).slideDown();
//         if ($(".portfolio-tabs__item:hidden").length == 0) {
//             $(".portfolio-more").css('visibility', 'hidden');
//         }
//         $('html,body').animate({
//             scrollTop: $(this).offset().top
//         }, 1000);
//     });
// });



$(function () {
    $(".portfolio-tabs__item").slice(0, 9).show();
    $("body").on('click touchstart', '.portfolio-more', function (e) {
        e.preventDefault();
        $(".portfolio-tabs__item:hidden").slice(0, 9).slideDown();
        if ($(".portfolio-tabs__item:hidden").length == 0) {
            $(".portfolio-more").css('visibility', 'hidden');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
});