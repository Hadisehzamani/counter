let decrementBtn = document.querySelector('.decrement')
let incrementBtn = document.querySelector('.increment')
let resetBtn = document.querySelector('.reset')
let number = document.querySelector('.number')

let value  = 0;

decrementBtn.addEventListener('click' ,function(){
    value--;
    number.innerHTML = value;
})

incrementBtn.addEventListener('click' ,function(){
    value++;
    number.innerHTML = value;
})

resetBtn.addEventListener('click' ,function(){
    value = 0;
    number.innerHTML = value;
})