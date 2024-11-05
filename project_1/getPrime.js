

// writing a function that prints out a list of prime numbers between 1 and n.

export function isPrime(n) {
    // since 0 and 1 is not prime, return false.
    if (n == 1 || n == 0) 
        return false;

    
    for (let i = 2; i < n; i++) {
        
        if (n % i == 0) 
            return false;
    }
    
    return true;
}


// now writing a function that is called on the html page to display the prime numbers on the HTML element itself
export function sendPrimeNumbers(result) {
    let my_textbox = document.getElementById("my-textbox");
   setTimeout(() => {
        my_textbox.innerText = result.join(", ");
    }, 4000);
    alert ("Calculation is finished!"); // to send the message as the calculation is finished

}