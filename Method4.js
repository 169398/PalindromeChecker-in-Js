function checkPalindrome(string){

    //checks the length of the string
    const len =string.length;


    //split into half
    for (let i=0;i<len/2;i++){

        //check if the first half is equal to the second half
        if(string[i] !== string[len-1-i]){
          return "Not a palindrome"
        }
    }
    return " It is a Palindrome"
}
//prompt user to enter  a name 

const string = prompt('Enter a string: ');
//call the function and store the result in a variable called result
const value= checkPalindrome(string);
console.log(value);