import fullpage from 'fullpage.js';

const fullpageInstance = new fullpage('#fullpage', {
    menu: '.menu-nav',
    anchors: ['index', 'skills'],
    scrollingSpeed: 500
});