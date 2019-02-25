const text = document.querySelector('.typing');

// Make a words array
const words = [
    '<web />',
    'javascript();',
    '<?php ?>',
    'sass {}',
    '<React />'
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