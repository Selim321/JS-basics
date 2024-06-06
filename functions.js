function greet(name) {
    return 'Hello, ' + name + '!';
  }
  
console.log(greet('Alice')); // Hello, Alice!

const square = (n) => n * n;

console.log(square(4)); // 16

// funciton to compute factorial(n)

const factorial = (n) => {
let i = 1;
let fact = n;
while (i<n) {
    fact *= (n-i);

    i++;
};
    return fact;
};

console.log(factorial(5));