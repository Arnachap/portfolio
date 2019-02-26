import fullpage from '../../node_modules/fullpage.js/dist/fullpage.min.js';

const fullpageInstance = new fullpage('#fullpage', {
    menu: '.menu-nav',
    anchors: ['index', 'skills'],
    scrollingSpeed: 500
});