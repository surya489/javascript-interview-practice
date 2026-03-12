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

console.log("Remove Duplicates", removeDuplicates([1,2,2,2,2,9,8,4,2,7,1,0,2,8,5]));

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

// Write a Program to convert Celsius to Fahrenheit in JavaScript

const celciusToFahrenheit = (celcius) => {
    const fahrenheit = (celcius * 9/5) + 32;

    return fahrenheit;
}

console.log(celciusToFahrenheit(20));

// Write a Program to convert Fahrenheit to Celsius in JavaScript

const fahrenheitToCelcius = (fahrenheit) => {
    const celcius = (fahrenheit - 32) * 5/9;

    return celcius;
}

console.log(fahrenheitToCelcius(68));

// Write a Program to sort an array in Ascending Order in JavaScript

const sortArrayInAscending = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let tempStore = arr[i];
                arr[i] = arr[j];
                arr[j] = tempStore;
            }
        }
    }
    return arr;
}

console.log(sortArrayInAscending([19, 89, 16, 43, 4, 1, -63]));

// write a Program to sort an array in Descending Order in JavaScript

const functionToOrderArrayInDesending = (arr) => {
    let n = arr.length;

    for(let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let tempStore = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tempStore;
            }
        }
    }

    return arr;

}

console.log(functionToOrderArrayInDesending([0, 89, 100, 77, 2, 106]));

// Write a Program to merge two arrays in JavaScript

function mergeArrays (arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(mergeArrays(sortArrayInAscending([0, 89, 100, 77, 2, 106]), sortArrayInAscending([19, 89, 16, 43, 4, 1, -63])));

// Find the Intersection of Two Arrays in JavaScript

const findInterSectionofTwoArrays = (arr1, arr2) => {
    const interAction = new Set(arr2);
    const arr1InterAct = new Set(arr1);
    console.log(arr1InterAct);

    console.log(interAction);

    return [...arr1InterAct].filter(value => interAction.has(value));
}

console.log(findInterSectionofTwoArrays([5, 6, 7, 7], [6, 7, 8, 7]));

function findIntersection(arr1, arr2) {

    return arr1.filter(item => arr2.includes(item));

}

console.log(findIntersection([1,2,3,4], [3,4,5,6]));

// Find the Union of Two Arrays in JavaScript

function arrayUnion (arr1, arr2) {
    return new Set([...arr1, ...arr2]);
}

console.log(arrayUnion([1, 2, 3], [2, 3, 4]));

// Check if a Number is Even or Odd in JavaScript

function isEven (num) {
    return num % 2 === 0;
}

console.log(isEven(3));

// Write a Program to find the minimum value in an array in JavaScript

function findMinValue (arr) {
    let minimum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    return minimum;
}

console.log(findMinValue([5, 6, 7]));

function findMinValueUsingMin (arr) {
    return Math.min(...arr);
}


console.log(findMinValueUsingMin([5, 6, 7, 0]));

// Check if a String Contains Another String in JavaScript

function checkStringCOntains (str, subStr) {
    return str.indexOf(subStr) !== -1;
}

console.log(checkStringCOntains('GeeksForGeeks', 'For'));

function checkStringUsingIncludes (string, subString) {
    return string.includes(subString);
}

console.log(checkStringUsingIncludes('GeeksForGeeks', 'hi'));

// using logic

function checkStringExists (str, sub) {
    for (let i = 0; i < str.length; i++) {
        let match = true;
        for(let j = 0; j < sub.length; j++) {
            if(str[i + j] !== sub[j]) {
                match = false;
                break;
            }
        }
        if (match) return true;
    }
    return false;
}

console.log(checkStringExists("javascript", "java"));

// Find the First Non-Repeated Character in a String in JavaScript

function findNonRepeatString (str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for(let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(findNonRepeatString('GeeksForGeeks'));

function maxDifference(arr) {
    let min = arr[0]
    let maxDiff = 0;

    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - min;
        console.log(`diff :` , diff);
        console.log("arr[i]", arr[i]);
        console.log("maxDiff b4", maxDiff);
        maxDiff = Math.max(maxDiff, diff);
        min = Math.min(min, arr[i]);
        // console.log(maxDiff);
    }
    return maxDiff;
}

console.log(maxDifference([1, 2, 90, 10, 110]));

// function to add property to an object

const adPropIntoObj = () => {

}