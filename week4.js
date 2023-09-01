// Week 4 Coding Project


/* 
    1. Create an array called ages that contains the following 
       values: 3, 9, 23, 64, 2, 8, 28, 93. 
*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //declaring array ages[] and assigning values

/*  
    a. Programmatically subtract the value of the first element in the array 
       from the value in the last element of the array. 
*/

let subtract = array => (array[array.length - 1]) - array[0]; //creating function to operate on any array
console.log(subtract(ages));

/*  
    b. Add a new age to your array and repeat the step above to ensure it is 
       dynamic. (works for arrays of different lengths).
*/

ages.push(112); //add new value to end of array
console.log(subtract(ages)); //repeat same operations on new array

var sum = 0; // creating initial value to add each element of the array to the sum of previous elements
for(let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
//takes each element of the array and adds that element to the sum of previous elements

var avg = sum / ages.length; //divides the sum of the array with the amount of elements
console.log(avg);

/* 
    2. Create an array called names that contains the following 
       values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
*/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //initializing array

/*  
    a. Use a loop to iterate through the array and calculate 
       the average number of letters per name.
*/

var namesSum = 0 //initializing variable to hold summation 
let lengths = names.map(element => element.length); 
//uses function to create new array of the length 
//of each element in original names array

for (let i = 0; i < lengths.length; i++) {
    namesSum += lengths[i];
}
console.log(namesSum); //display sum of all letters (this is for me mostly)
let namesAvg = namesSum / names.length; //very creative variable naming scheme
console.log(namesAvg); //display average letters in each name

/*
    b. Use a loop to iterate through the array again and concatenate 
       all the names together, separated by spaces. 
*/

var allNames = '';
for (let i = 0; i < names.length; i++) {
    allNames += names[i] + ' ';
} //aware this puts a ' ' at end of string but not specified to prevent that
//above for loop adds each element to the string of previous combined elements
console.log(allNames); //display results

/*
    3. How do you access the last element of any array?
*/

//By calling the element of the array equal to one subtracted from the length of the array
//ie. array[array.length - 1]

/*
    4. How do you access the first element of any array?
*/

//By calling the first element in the array, which is at position 0 ie array[0]

/*
    5. Create a new array called nameLengths. Write a loop to iterate over the previously 
       created names array and add the length of each name to the nameLengths array. 
*/

var nameLengths = []; //creating empty array
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
} //gets length of each string and adds it to nameLangths array
console.log(nameLengths);

/*
    6. Write a loop to iterate over the nameLengths array 
       and calculate the sum of all the elements in the array. 
*/

var sumNameLengths = 0; //creating variable to hold sum
for (let i = 0; i < nameLengths.length; i++) {
    sumNameLengths += nameLengths[i];
}
console.log(sumNameLengths);

/*
    7. Write a function that takes two parameters, word and n, as 
       arguments and returns the word concatenated to itself n number of times.
*/

const autoConcat = (a, b) => {
    let c = ''; //placeholder empty string to add input string to b number of times
    for (let i = 0; i < b ; i++) {
        c += a; //adding a to c for b times
    }
    return c;
} 
console.log(autoConcat('hello', 3)); //display

/*
    8. Write a function that takes two parameters, firstName and lastName, and 
       returns a full name. The full name should be the first and the last name 
       separated by a space.
*/

const fullName = (a, b) => `${a} ${b}`; //function taking 2 inputs and creating a new combined string
console.log(fullName('Stormé', 'DeLarverie'));

/*
    9. Write a function that takes an array of numbers and returns true if the 
       sum of all the numbers in the array is greater than 100.
*/

const flossie = array => {          //creating function that takes array as input
    let total = 0;
    for (let i =0; i < array.length; i++) {
        total += array[i];
    }
    if (total > 100) {   //checking sum to see if over 100 and returning appropriate boolean value
        return true;
    } else {return false;}
}

let testArrayFalse = [2, 40, 4, 18];
let testArrayTrue = [90, 1, 2, 5, 7];

console.log(`${flossie(testArrayFalse)}
${flossie(testArrayTrue)}`);                    //displaying 2 test cases of function

/*
    10. Write a function that takes an array of numbers 
        and returns the average of all the elements in the array.
*/

const myAvg = array => (array.reduce((a, b) => a + b)) / array.length;
//above function takes array and reduces it by collecting sum of all 
//elements and dividing by number of elements in array
let testAvg = [2, 5, 6, 7];
console.log(myAvg(testAvg)); //testing on array testAvg and displaying results 

/*
    11. Write a function that takes two arrays of numbers and returns true 
        if the average of the elements in the first array is greater than 
        the average of the elements in the second array.
*/

const arrayCompare = (a, b) => {
    if (myAvg(a) > myAvg(b)) {       //calling avg function from earlier inside function
        return true;
    } else {return false;}       //simple comparison check on returned avg values
}

console.log(`${arrayCompare(testArrayTrue, testArrayFalse)}
${arrayCompare(testArrayFalse, testArrayTrue)}`);       //testing function using arrays declared earlier

/*
    12. Write a function called willBuyDrink that takes a boolean isHotOutside, 
        and a number moneyInPocket, and returns true if it is hot outside and 
        if moneyInPocket is greater than 10.50.
*/

const willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {return false;}      //performing logic satisfying conditions and returning correct boolean value
}

console.log(`${willBuyDrink(false, 10)}
${willBuyDrink(true, 5)}
${willBuyDrink(false, 20)}
${willBuyDrink(true, 32)}`);  //testing 4 separate cases and logging results

/*
    13. Create a function of your own that solves a problem. In comments, 
        write what the function does and why you created it.
*/

const itsAllOhio = array => {       //this function takes any array of elements and makes then all Ohio
    for (let i = 0; i < array.length; i++) {
        array[i] = 'Ohio';
    }
    return array;
}

let pleaseAnythingButOhio = ['squirrel', 'pineapple', 24, false, 'Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz', Math.PI];

itsAllOhio(pleaseAnythingButOhio);
console.log(pleaseAnythingButOhio);