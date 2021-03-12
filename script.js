const form = document.getElementById('form');
const firstValue = document.getElementById('firstValue')
const operator = document.getElementById('operator')
const secondValue = document.getElementById('secondValue')
const button = document.getElementById('button')


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const first = parseInt(firstValue.value)
    const second = parseInt(secondValue.value)

    switch (operator.value) {
        case "+":
            console.log(first + second);
            result.innerHTML = `the result is ${first + second}`
            break;
        case "-":
            console.log(first - second);
            result.innerHTML = `the result is ${first - second}`
            break;
        case "/":
            console.log(first / second);
            result.innerHTML = `the result is ${first / second}`
            break;
        case "*":
            console.log(first * second);
            result.innerHTML = `the result is ${first * second}`
            break;
    }
})

let result = document.getElementById('result');


const refresh = document.getElementById('refresh')
const formInput = document.querySelectorAll('.formInput')
/*const formInput2= document.querySelector('formInput')*/

refresh.addEventListener('click', function () {
    for (let i = 0; i < formInput.length; i++) {
        console.log(formInput[i])
        formInput[i].value = "";
        result.innerHTML = "The result is:"

    }
})







