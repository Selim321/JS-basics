// if...else
let age = 20;

if (age < 18) {
  console.log('You are a minor.');
} else if (age < 65) {
  console.log('You are an adult.');
} else {
  console.log('You are a senior.');
}

// Switch
let fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('Bananas are great!');
    break;
  case 'apple':
    console.log('Apples are healthy!');
    break;
  case 'cherry':
    console.log('Cherries are delicious!');
    break;
  default:
    console.log('Unknown fruit');
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log('Iteration:', i);
  }

// While loop
let i = 0;
while (i < 5) {
  console.log('Iteration:', i);
  i++;
}

// Do...while loop 
let j = 0;
do {
  console.log('Iteration:', j);
  j++;
} while (j < 5);


// Practice 

my_array = [1,3,4];

for (let i=0; i<my_array.length; i++) {
  if (my_array[i] % 2 == 0) {
    console.log(my_array[i]+ " is even");
  }
  else {
    console.log(my_array[i]+" is odd")
  }
  
};