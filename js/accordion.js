
// class GraphAccordion {
//     constructor(selector, options) {
//         let defaultOptions = {
//             isOpen: () => { },
//             isClose: () => { },
//             speed: 900
//         };

//         this.options = Object.assign(defaultOptions, options);
//         this.accordion = document.querySelector(selector);
//         this.control = this.accordion.querySelector('.accordion__control');
//         this.content = this.accordion.querySelector('.accordion__content');
//         this.event();
//         this.start();
//     }

//     start() {
//         console.log('start!');
//         if (this.accordion) {
//             if (this.accordion.classList.contains('is-open')) {
//                 this.open()
//             }
//             else {
//                 this.close();
//             }
//         }
//     }

//     event() {
//         console.log('event!');

//         if (this.accordion) {
//             this.accordion.addEventListener('click', (e) => {
//                 this.accordion.classList.toggle('open');

//                 if (this.accordion.classList.contains('open')) {
//                     this.open();
//                 } else {
//                     this.close();
//                 }
//             });
//         }
//     }

//     open() {
//         this.accordion.style.setProperty('--accordion-time', `${this.options.speed / 1000}s`);
//         this.accordion.classList.add('is-open');
//         this.control.setAttribute('aria-expanded', true);
//         this.content.setAttribute('aria-hidden', false);
//         // this.content.setAttribute('style', 'visibility: hidden;');
//         this.content.style.visibility = 'visible';
//         this.content.style.maxHeight = this.content.scrollHeight + 'px';
//         this.options.isOpen(this);
//     }

//     close() {
//         console.log('close');
//         this.accordion.classList.remove('is-open');
//         this.control.setAttribute('aria-expanded', false);
//         this.content.setAttribute('aria-hidden', true);
//         this.content.setAttribute('style', 'visibility: hidden;');
//         this.content.style.maxHeight = '0px';
//         this.options.isClose(this);
//     }
// }

// if (document.querySelector('.we-offer')) {
//     const accordion1 = new GraphAccordion('.accordion-1', {
//         speed: 900
//     });

//     const accordion2 = new GraphAccordion('.accordion-2', {
//         speed: 900
//     });
// }


class GraphAccordion {
    constructor(selector, options) {
        let defaultOptions = {
            isOpen: () => { },
            isClose: () => { },
            speed: 300
        };

        this.options = Object.assign(defaultOptions, options);
        this.accordion = document.querySelector(selector);
        this.control = this.accordion.querySelector('.accordion__control');
        this.content = this.accordion.querySelector('.accordion__content');
        this.event();
        this.start();
    }

    event() {
        // console.log('event!');

        if (this.accordion) {
            this.accordion.addEventListener('click', (e) => {
                this.accordion.classList.toggle('open');

                if (this.accordion.classList.contains('open')) {
                    this.open();
                } else {
                    this.close();
                }
            });
        }
    }

    start() {
        // console.log('start!');
        
        if (this.accordion) {
            if (this.accordion.classList.contains('is-open')) {
                this.open()
            }
            else {
                this.close();
            }
        }
    }

    open() {
        this.accordion.style.setProperty('--accordion-time', `${this.options.speed / 1000}s`);
        this.accordion.classList.add('is-open');
        this.control.setAttribute('aria-expanded', true);
        this.content.setAttribute('aria-hidden', false);
        this.content.style.maxHeight = this.content.scrollHeight + 'px';
        this.options.isOpen(this);
    }

    close() {
        this.accordion.classList.remove('is-open');
        this.control.setAttribute('aria-expanded', false);
        this.content.setAttribute('aria-hidden', true);
        this.content.style.maxHeight = null;
        this.options.isClose(this);
    }
}

if (document.querySelector('.we-offer')) {
    const accordion1 = new GraphAccordion('.accordion-1', {
        speed: 500,
    });

    const accordion2 = new GraphAccordion('.accordion-2', {
        speed: 500
    });
}
