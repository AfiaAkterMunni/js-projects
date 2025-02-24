const form = document.querySelector('#form');
const number = document.querySelector('#number');

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log('Random number ' + randomNumber);
let guess = 3;
while (guess) {
    guess -= 1;
    console.log(guess);

    form.addEventListener('submit', getResult);
    function getResult(e) {

        if (number.value) {

            if (randomNumber === number.value) {
                console.log(`${number.value} is correct, YOU WIN!`);
            }
            else {
                console.log(`${number.value} is not correct, ${x} guesses left`);
            }
        }
        else {
            console.log(`NaN is not correct, ${x} guesses left`);
        }
        e.preventDefault();
    }
}


// for (let i = 0; i < 3; i++) {
//     form.addEventListener('submit', getResult);
//     function getResult(e) {
//         const x = 3 - (i + 1);
//         if (x > 0) {
//             if (number.value) {
//                 if (randomNumber === number.value) {
//                     console.log(`${number.value} is correct, YOU WIN!`);

//                 }
//                 else {
//                     console.log(`${number.value} is not correct, ${x} guesses left`);

//                 }
//             }
//             else {
//                 console.log(`NaN is not correct, ${x} guesses left`);
//             }
//         }

//         else {
//             console.log(`Game Over, you lost. The correct number was ${randomNumber}`);
//         }
//         e.preventDefault();
//     }

// }


// const number = Math.floor(Math.random() * 10) + 1;
// console.log(number);
