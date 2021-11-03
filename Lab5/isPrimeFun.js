function isPrime(callback, num){
    setTimeout(() => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) {
               callback({ prime: false });
            }
        }
        callback({ prime: num > 1 });
    }, 500);
}

async function isPrimeAsync(num) {
    isPrime(res => console.log(res), num);
}

console.log('start');
isPrimeAsync(5);
console.log('end');