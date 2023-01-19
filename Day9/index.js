const images = [
    "images/img-1.jpg",
    "images/img-2.jpg",
    "images/img-3.jpg"
]
let containerEl = document.getElementById('container')
let newRender = ""

function imgRender() {
    for(let i = 0; i < images.length; i++) {
        newRender += `<img class=team-img src=${images[i]}>`
    }
    containerEl.innerHTML = newRender
}

imgRender()