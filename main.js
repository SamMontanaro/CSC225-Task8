'use strict';

// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string){
    return string.split("").reverse().join("");
}

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    var output = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i].toLowerCase()) {
            output += string[i].toUpperCase();
        }
        else {
            output += string[i].toLowerCase();
        }
    }
    return output;
}

//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    return array.map(function(number){
        return (number - 32) * 5.0/9.0
    })
}

//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
    return array.map(function(number){
        return number >= 75 ? number = true : number = false;
    })
}

//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    var output = [];
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    
    cardinalNumbers.forEach((cardinalNum, index) => {
        output.push(cardinalNum + " is " + germanNumbers[index]);
    });

    return output;
}

// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    // Trying out Wilson's Theorem
    // If (p-1)! is congruent to -1 mod(p), then p is prime.
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    const result = numbers.filter(function(number){
        var factorial = 1;
        for (let i = number - 1; i > 1; i--) {
            factorial *= i;
        }
        return number != 1 && (factorial % number == (-1 + number) % number);
    })

    return result;
}

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
function totallyNotFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0)
            console.log("CSC255 RULES I LOVE JAVASCRIPT");
        else if (i % 5 == 0)
            console.log("I LOVE JAVASCRIPT");
        else if (i % 3 == 0)
            console.log("CSC225 RULES");
        else
            console.log(i);
    }
}