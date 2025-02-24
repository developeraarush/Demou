const texts = ["a Developer.", "a Designer.", "a Content Creator.", "a Learner!"];
const typingSpeed = 100;  // Speed of typing
const eraseSpeed = 50;    // Speed of erasing
const delayBetweenTexts = 1000; // Delay before switching texts

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const target = document.getElementById("typing-text");
    const prefix = "I'm "; // Prefix before every text
    const currentText = texts[textIndex];

    if (isDeleting) {
        target.innerHTML = prefix + currentText.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // Switch to next text
            setTimeout(typeText, 500);
        } else {
            setTimeout(typeText, eraseSpeed);
        }
    } else {
        target.innerHTML = prefix + currentText.substring(0, charIndex) + "|";
        charIndex++;

        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeText, delayBetweenTexts);
        } else {
            setTimeout(typeText, typingSpeed);
        }
    }
}

window.onload = typeText;
