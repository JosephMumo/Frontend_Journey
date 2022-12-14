let greetings = [
    "Hey, how is it going?",
    "I'm great thank you, How about you?",
    "All good, I've been working on my portfolio lately."
]
greetingEl = document.querySelector('#greeting-el');

function greet() {
    let str = " ";
    for (let i = 0; i < greetings.length; i++) {
        greetingEl.textContent += greetings[i] + str;
    }
};