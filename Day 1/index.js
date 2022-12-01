count = 0;
countEl = document.getElementById('el-counted');
function increment() {
    count = count + 1;
    countEl.innerText = count;
}

function reset() {
    count = 0;
    countEl.innerText = count
}