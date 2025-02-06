function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function alternatePrimes(limit) {
  let primes = [];
  let result = [];

  for (let i = 2; primes.length < limit * 2; i++) {
    
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  for (let i = 0; i < primes.length; i += 2) {
    result.push(primes[i]);
  }

  return result;
}

function generatePrimes() {
  let limit = document.getElementById("limit").value;
  if (limit <= 0 || isNaN(limit)) {
    document.getElementById("result").innerHTML =
      "Please enter a valid number!";
    return;
  }
  let primes = alternatePrimes(parseInt(limit));
  document.getElementById("result").innerHTML =
    "Alternative Prime Numbers: " + primes.join(", ");
}
