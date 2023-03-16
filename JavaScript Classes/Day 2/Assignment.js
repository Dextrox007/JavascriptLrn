console.log(isPrime(10)); 


function isPrime(n) {
    /*
    Determines whether a number is prime or not.
    */
    if (n <= 1) {
      return false;
    }
    for (let x = 2; x <= Math.sqrt(n); x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }

console.log(largestDivisor(10));

  function largestDivisor(n) {
    /*
    Returns the largest number that can divide n without leaving a remainder.
    */
    for (let x = n - 1; x > 1; x--) {
      if (n % x === 0) {
        return x;
      }
    }
    return 1;
  }


  console.log(square(10));
  function square(n) {
    /*
    Returns the square of a number.
    */
    return n * n;
  }

  