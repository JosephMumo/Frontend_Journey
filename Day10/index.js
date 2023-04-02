let ansEL = document.getElementById('ans-el')
let acEl = document.getElementById('one')
let posNeg = document.getElementById('two')
let percent = document.getElementById('three')
let sevEl = document.getElementById('sev-el')
let ans;
ansEL.innerText = ans;

// function to reset display to zero
acEl.addEventListener('click', function() {
    ansEL.textContent = 0;
});

// function to assign negative or positive value
posNeg.addEventListener('click', function() {
    ansEL.textContent = ans * -1;
})

// function to get the percentage
percent.addEventListener('click', function() {
    ansEL.textContent = ans / 100
})

sevEl.addEventListener('click', function() {
    let num = 7;
    ansEL.textContent += num;
})
