// function orderPizza() {
//     setTimeout(() => {
//         let pizza = `🍕`;
//         console.log(`order ${pizza}`);
//     }, 2000)
    
    
//     console.log(`${pizza} ready`);
//     console.log(`eat ${pizza}`);
// }
// orderPizza()
// cleaning up the above code
function orderPizza(callback) {
    setTimeout(() => {
        let pizza = `🍕`;
        callback();
    }, 2000)
    console.log(`pizza ready`)
}
function eatPizza() {
    console.log(`Eat pizza`)
}
orderPizza(eatPizza)
console.log(`Keep Coding`);

/*The above code shows a good instance where we need callbacks 
for asynchronous code 
in the function orderPizza we parse a callback function (the eatPizza function)
the eatPizza waits for the completion of execution of OrderPizza before it is executed*/ 