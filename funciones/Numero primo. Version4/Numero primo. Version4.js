function prime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
let sumPrimes = 0;
for (let i = 1; i <= 10; i++) {
    if (prime(i)) {
        sumPrimes += i;
    }
}
alert("Suma de primos en los 10 primeros números:" + sumPrimes);
let magnitude = 1;
for (let primes = 0; primes < 10; primes++) {
    while (!prime(magnitude)) {
        magnitude++;
    }
    sumPrimes += magnitude;
    magnitude++;
}
alert("Suma de los 10 primeros primos:" + sumPrimes);

