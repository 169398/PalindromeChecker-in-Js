// Define the function to check if a number is a palindrome or not
function isPalindrome(num) {
    const strNum = num.toString();
    const reversedStrNum = strNum.split('').reverse().join('');
    return strNum === reversedStrNum;
}

// Test the function with a number that can be written in both ways .
const number = 12321;
if (isPalindrome(number)) {
    console.log(`${number} is a palindrome.`);
} else {
    console.log(`${number} is not a palindrome.`);
}
