// PART 3: DEFERRED EXECUTION

import { isPrime } from './getPrime.js';
import { sendPrimeNumbers } from './getPrime.js';


//now calling the isPrime function in a given setting
let n = 100;
// check for every number from 1 to n
const result = [];
for (let i = 1; i <= n; i++) {
    // check if current number is prime
    if (isPrime(i)) {
        result.push(i);
    }
}

console.log(result); // to see if it prints out in terminal


sendPrimeNumbers(result); // to see if it prints out in browser, for this one has to open the html page in browser


