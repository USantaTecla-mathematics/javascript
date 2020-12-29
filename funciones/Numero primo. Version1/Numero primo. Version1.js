function prime(number) {
    let isPrime;
    if (number == 1) {
        isPrime = true;
    } else {
        let next = 2;
        while (number % next != 0) {
            next++;
        }
        isPrime = number == next;
    }
    return isPrime;
}
let sumPrimes = 0;
for (let i = 1; i <= 10; i++) {
    if (prime(i)) {
        sumPrimes += i;
    }
}
alert("Suma de primos en los 10 primeros números:" + sumPrimes);
let primes = 0;
let magnitude = 1;
do {
    if (prime(magnitude)) {
        primes++;
        sumPrimes += magnitude;
    }
    magnitude++;
} while (primes < 10);
alert("Suma de los 10 primeros primos:" + sumPrimes);