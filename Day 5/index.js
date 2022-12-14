let header = document.querySelector('#header-el');
header.textContent = "Fruit Sorter";
let fruits = ['🍎','🍊','🍎','🍎','🍊'];

let appleShelf = document.querySelector('#appleEl');
let orangeShelf = document.querySelector('#orangeEl');
function fruitSorter() {
    for(let i = 0; i < fruits.length; i++) {
        // console.log(fruits[i])
        if(fruits[i] === '🍎') {
            appleShelf.textContent += fruits[i]
        } else if(fruits[i] === '🍊') {
            orangeShelf.textContent += fruits[i]
        }
    }
}
fruitSorter()