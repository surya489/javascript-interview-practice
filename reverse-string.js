function reveseString (string) {
    // return string.split("").reverse().join("");
    return string.split("").reverse().join("");
}

const reversedString = reveseString("hello");

console.log(reversedString);

console.log("Reverse String Completed");

console.log("=========================");

// Closures

function outerFunction () {
    let count = 0;

    function innerFunction () {
        count++;
        console.log(count);
    }

    return innerFunction;

}

const counter = outerFunction();

counter();
counter();
counter();


console.log("Closures Completed");

console.log("=========================");

// Palindrome Check

function isPalindrome (string) {
    const reversedString = string.split("").reverse().join("");
    return string === reversedString;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("surya"));
console.log(isPalindrome("1219"));

// FInd largest Number in an array

function findLargestNumber (array) {
    return Math.max(...array);
}

console.log(findLargestNumber([110, 1, 119, 0]));

function findLargestNumberUsingLoop (array) {
    let largest = array[0];

    for(let i = 0; i <= array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }

    return largest;

}

console.log(findLargestNumber([101, 99, 1, 980, 1000]));

// Remove Duplicates from array

function removeDuplicates (array) {
    return [...new Set(array)];
}

console.log(removeDuplicates([1,2,2,2,2,9,8,4,2,7,1,0,2,8,5]));

// Count Once Occurance In An Array

function countOccurance (array) {
    const result = {};

    for (let item of array) {
        result[item] = (result[item] || 0) + 1;
    }

    console.log(array)

    return result;

}

console.log(countOccurance(["1", "1", "2", "3", "5", "2", "5", "0"]));

// Remove First Element in an array

let array = [10, 1, 2, 3, 4];
array = array.slice(1);
console.log(array);

// Write a callBack Function

function calculate(a, b, callBack) {
    callBack(a + b, a * b);
}

calculate(3, 5, (add, multiply) => {
    console.log(add, multiply);
});

// Arrow function

const addition = (a, b) => {
    console.log(a + b);
}

addition(1, 8);

// Add Property to an object

const obj = {
    name: "Surya"
}

obj.age = 26;

console.log("Add Property To Obj", obj);

// Delete property from an obj

delete obj.name;

console.log("Delete Property To Obj", obj);

// Adds numbers in the array, together using the reduce mehtod

console.log([1, 2, 3, 4].reduce((a, b) => a + b));

// Write a function to get the sum of an array

function sumArray (array) {
    let sumValues = 0;

    for(let i = 0; i < array.length; i++) {
        sumValues += array[i]; 
    }

    return sumValues;

}

console.log(sumArray([11, 0, 90, 1]));

// function to find that the given num is a prime num 

// Prime Number -- divisible by 1 & itself ( reminde 0 )

function toCheckPrimeNum (num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(`i : ${i}, num : ${num}, num % i : ${num % i}`)
            return false;
        } else {
            console.log(`i : ${i}, num : ${num}`);
        }
    }
    return true
}

console.log(toCheckPrimeNum(10));

// Write a Program to print Fibonacci sequence up to n terms?

function fibonacciSequence (num) {
    let a = 0, b = 1, next;

    for(let i = 1; i <= num; i++) {
        console.log(a);
        next = a + b;
        a = b;
        b = next;
    }

}

fibonacciSequence(7);

// Write a Program to find factorial of a number

const findFactorial = (num) => {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result = result * i;
    }

    return console.log(result);
}

findFactorial(7);

// Calculate the Power of a Number in JavaScript

function calculatePowerOfNumber (base, exponent) {
    const result = base ** exponent
    return console.log(result);
}

calculatePowerOfNumber(3, 3);

// Write a Program to print the frequency of elements in an array

const findFrequency = (array) => {
    const frequency = {};

    for (let i = 0; i < array.length; i++) {
        if (frequency[array[i]]) {
            frequency[array[i]] += 1;
        } else {
            frequency[array[i]] = 1;
        }
    }

    return console.log(frequency);

}

findFrequency([1, 10, 55, 1, 90, 76, 88, 55]);

function frequencyOfNum (arr) {
    const freq = {};

    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1;
    }

    return console.log(freq);

} 

frequencyOfNum([1, 10, 58, 58, 90, 76, 76, 58]);

// Write a Program to count the occurrences of a character in a string in JavaScript

// using split() method

function charOccuranceUsingSplit (string, character) {
    return string.split(character).length -1;
}

console.log(charOccuranceUsingSplit("jaya surya", "a"));

// Using for-loop method

function charOccuranceUsingForLoop (str, char) {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }

    return console.log(count);

}

charOccuranceUsingForLoop("santhamani", 'n');

// function to add property to an object

const adPropIntoObj = () => {

}