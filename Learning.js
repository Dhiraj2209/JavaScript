var a,b; //Declaration of variable
let c; // variable block
a = 9, b = 2.22, c = 7;

//Comments , /*..Multiline comments...*/

console.log(a+b+c); //Printing

console.log(a**b); // ** Exponential operator

let word1 = "Dhiraj";
console.log(word1 + " Prajapati"); // Concatinating two string
console.log(typeof(word1), typeof(a), typeof(b)); // Give type of variable

function factorial(n){ // Function keyword to make function
    if(n == 1 || n ==0 ){
        return 1;
    }

    return n * factorial(n -1); // Recursive call
}

console.log(factorial(4));

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; //Objects
console.log(person.firstName + " " + person.lastName); // Accessing Object vaules
