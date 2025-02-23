const form = document.querySelector('#form');
const number = document.querySelector('#number');
form.addEventListener('submit', getResult);

function getResult(e) {

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (number.value) {
        if (randomNumber === number.value) {
            console.log('Input number' + number.value);
            console.log('Random number'.randomNumber);
        }
        console.log(number.value);
        console.log(randomNumber);
    }
    else {
        console.log(number.value);
    }

    e.preventDefault();
}


// const number = Math.floor(Math.random() * 10) + 1;
// console.log(number);
