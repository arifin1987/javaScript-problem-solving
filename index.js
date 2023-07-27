
// 1. Reversed String
/*
function reversed(str){
    let ele='';
    for(let i=str.length; i >= 0; i--){
        ele += str[i]
        
    }
    return ele;
    
}

let str = 'Hello world'
const result = reversed(str);
console.log(result);
*/


// 2. Sum of positive numbers
/*
function sumOfPositiveNumbers(inputArray) {
    let sum = 0;
    for (let num of inputArray) {
      if (num > 0) {
        sum += num;
      }
    }
    return sum;
  }
  
 
  const exampleInput = [2, -5, 10, -3, 7];
  const result = sumOfPositiveNumbers(exampleInput);
  console.log(result); // Output: 19
  */
//  3. Random Password
/*
function generateRandomPassword(length) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    }
  
    return password;
  }
  
  
  const passwordLength = 12; 
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  */
//  4. Calculator
/*
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error: Division by zero is not allowed.";
      }
    default:
      return "Error: Invalid operator.";
  }
}


const num1 = 10;
const num2 = 5;
const operator = '+';
const result = calculate(num1, num2, operator);
console.log(`Result: ${result}`);
*/
// 5. Roman numerical to integer
/*
function romanToInt(roman) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentNumeral = romanNumerals[roman[i]];
    const nextNumeral = romanNumerals[roman[i + 1]];

    if (nextNumeral && currentNumeral < nextNumeral) {
      result += nextNumeral - currentNumeral;
      i++; // Skip the next numeral since it has already been accounted for.
    } else {
      result += currentNumeral;
    }
  }

  return result;
}


console.log(romanToInt("IX")); 
console.log(romanToInt("XXI")); 
*/
// 6. Most frequent number in an array
/*
function findMostFrequentElement(arr) {
  if (arr.length === 0) {
    return null; 
  }

  const frequencyMap = {};
  let mostFrequentElement = arr[0];
  let maxFrequency = 1;

  for (const num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;

    if (frequencyMap[num] > maxFrequency) {
      mostFrequentElement = num;
      maxFrequency = frequencyMap[num];
    }
  }

  return mostFrequentElement;
}


const inputArray = [9, 5, 2, 5, 9, 9, 1, 4, 5];
const result = findMostFrequentElement(inputArray);
console.log(result); 
*/

// 7. Second smallest element in an array
function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return null; 
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

 
  return secondSmallest !== Infinity ? secondSmallest : null;
}


const inputArray = [3, 5,  5, 3, 3, 1, 4, 5];
const result = findSecondSmallest(inputArray);
console.log(result); 




  