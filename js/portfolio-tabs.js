const portfolioTabsNav = document.querySelector('.portfolio-tabs-nav');
const portfolioTabsBtns = document.querySelectorAll('.portfolio-tabs-nav__btn');
const portfolioTabsItems = document.querySelectorAll('.portfolio-tabs__item');
const portfolioTabsItemsVisible = document.querySelectorAll('.portfolio-tabs__item--visible');
const loadMore = document.querySelector('.portfolio-more');
const maxItems = 9;

if (portfolioTabsNav) {
    const isLoadMoreNeeded = (selector) => {
        if (selector.length <= maxItems) {
            loadMore.style.display = 'none';
        } else {
            loadMore.style.display = 'inline-flex';
        }
    };

    const hideMoreItems = (selector) => {
        if (selector.length > maxItems) {
            const arr = Array.from(selector);
            const hiddenItems = arr.slice(maxItems, selector.length);

            hiddenItems.forEach(el => {
                el.classList.remove('portfolio-tabs__item--visible');
                el.classList.remove('portfolio-tabs__item--visible-more');
            });
        }
    };

    portfolioTabsNav.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('portfolio-tabs-nav__btn')) {
            const path = target.dataset.path;

            portfolioTabsBtns.forEach(el => { el.classList.remove('portfolio-tabs-nav__btn--active') });
            target.classList.add('portfolio-tabs-nav__btn--active');

            portfolioTabsItems.forEach(el => {
                el.classList.remove('portfolio-tabs__item--visible');
                el.classList.remove('portfolio-tabs__item--visible-more');
            });

            document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
                el.closest('.portfolio-tabs__item').classList.add('portfolio-tabs__item--visible');
            });

            isLoadMoreNeeded(document.querySelectorAll(`[data-target="${path}"]`));
            hideMoreItems(document.querySelectorAll('.portfolio-tabs__item--visible'));

            if (path == 'all') {

                portfolioTabsItems.forEach(el => {
                    el.classList.add('portfolio-tabs__item--visible');
                });

                isLoadMoreNeeded(document.querySelectorAll('.portfolio-tabs__item--visible'));
                hideMoreItems(document.querySelectorAll('.portfolio-tabs__item--visible'));
            }
        }
    });

    hideMoreItems(portfolioTabsItems);
    isLoadMoreNeeded(portfolioTabsItemsVisible);

    loadMore.addEventListener('click', (e) => {
        const visibleItemsLength = document.querySelectorAll('.portfolio-tabs__item--visible').length;
        const path = document.querySelector('.portfolio-tabs-nav__btn--active').dataset.path;
        if (path == 'all') {
            console.log("items=" + visibleItemsLength + "/"+ portfolioTabsItems.length);
            Array.from(portfolioTabsItems).slice(visibleItemsLength, visibleItemsLength + maxItems).forEach(el => {
                el.classList.add('portfolio-tabs__item--visible');
            });
            if (portfolioTabsItems.length < visibleItemsLength + maxItems) {
                loadMore.style.display = 'none';
            }
        } else {
            const portfolioPathItems = document.querySelectorAll(`[data-target="${path}"]`);
            console.log("items=" + visibleItemsLength + "/"+ portfolioPathItems.length);
            Array.from(portfolioPathItems).slice(visibleItemsLength, visibleItemsLength + maxItems).forEach(el => {
                el.closest('.portfolio-tabs__item').classList.add('portfolio-tabs__item--visible');
            });
            if (portfolioPathItems.length < visibleItemsLength + maxItems) {
                loadMore.style.display = 'none';
            }
        }
    });
}

//?????????????? ??????, ?????????? ?????????????????????? ???????????????? 9 ????-????, ?? ???? ??????


// $(function () {
//     $(".portfolio-tabs__item").slice(0, 9).show();
//     $("body").on('click touchstart', '.portfolio-more', function (e) {
//         e.preventDefault();
//         $(".portfolio-tabs__item:hidden").slice(0, 9).slideDown();
//         if ($(".portfolio-tabs__item:hidden").length == 0) {
//             $(".portfolio-more").css('visibility', 'hidden');
//         }
//     });
// });



