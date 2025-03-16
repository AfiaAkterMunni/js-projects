//guess value
let min = 1,
    max = 10,
    winningNum = 2;
guessLeft = 3;

//ui elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message');

//asign ui min and max 
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // validate
    if (isNaN(guess) || guess < min || guess > max) {
        setmessage(`Please enter a number between ${min} and ${max}`);
    }


});

// set message
function setmessage(msg) {
    message.style.color = 'red';
    message.textContent = msg;
}








// const form = document.querySelector('#form');
// const number = document.querySelector('#number');

// const randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log('Random number ' + randomNumber);

// const guess = 3;

// form.addEventListener('submit', getResult);
// const text = "";
// function getResult(e) {
//     const x = 3 - (i + 1);
//     if (x > 0) {
//         if (number.value) {
//             if (randomNumber === number.value) {
//                 text += `${number.value} is correct, YOU WIN!`;
//                 console.log(text);
//             }
//             else {
//                 text += `${number.value} is not correct, ${x} guesses left`;
//                 console.log(text);
//             }
//         }
//         else {
//             text += `NaN is not correct, ${x} guesses left`;
//             console.log(text);
//         }
//     }

//     else {
//         text += `Game Over, you lost. The correct number was ${randomNumber}`;
//         console.log(text);
//     }
//     e.preventDefault();
// }

// // document.getElementById("demo").innerHTML = text;





// // let guess = 3;
// // while (guess) {
// //     guess -= 1;
// //     console.log(guess);

// //     form.addEventListener('submit', getResult);
// //     function getResult(e) {

// //         if (number.value) {

// //             if (randomNumber === number.value) {
// //                 console.log(`${number.value} is correct, YOU WIN!`);
// //             }
// //             else {
// //                 console.log(`${number.value} is not correct, ${x} guesses left`);
// //             }
// //         }
// //         else {
// //             console.log(`NaN is not correct, ${x} guesses left`);
// //         }
// //         e.preventDefault();
// //     }
// // }




// // const number = Math.floor(Math.random() * 10) + 1;
// // console.log(number);
