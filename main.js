/*
** Menu button animation
*/
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-link');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
navLinks.forEach(navLink => navLink.addEventListener('click', toggleMenu));

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        toggleMenu();
    }
};

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

/*
**  Particles
*/
particlesJS.load('particles-js', 'assets/particles.json');

/*
** Typing effect
*/
const text = document.querySelector('.typing-text');

// Make a words array
const words = [
    "<Développeur web />",
    "<Programmeur />",
    "<Créateur />",
    "<Entrepreneur />"
];

// Start typing effect
setTyper(text, words);

function setTyper(element, words) {

    const letterTypeDelay = 40 + Math.floor(Math.random() * 100);
    const wordStayDelay = 2000;

    const directionForwards = 0;
    const directionBackwards = 1;

    var direction = directionForwards;
    var wordIndex = 0;
    var letterIndex = 0;

    var wordTypeInterval;

    startTyping();

    function startTyping() {
        wordTypeInterval = setInterval(typeLetter, letterTypeDelay);
    }

    function typeLetter() {
        const word = words[wordIndex];

        if (direction == directionForwards) {
            letterIndex++;

            if (letterIndex == word.length) {
                direction = directionBackwards;
                clearInterval(wordTypeInterval);
                setTimeout(startTyping, wordStayDelay);
            }

        } else if (direction == directionBackwards) {
            letterIndex--;

            if (letterIndex == 0) {
                nextWord();
            }
        }

        const textToType = word.substring(0, letterIndex);

        element.textContent = textToType;
    }

    function nextWord() {

        letterIndex = 0;
        direction = directionForwards;
        wordIndex++;

        if (wordIndex == words.length) {
            wordIndex = 0;
        }

    }
}

/*
** Fullpage
*/
new fullpage('#fullpage', {
    menu: '.menu-nav',
    anchors: ['index', 'skills'],
    scrollingSpeed: 500
});

/*
**  Skills Animation
*/
