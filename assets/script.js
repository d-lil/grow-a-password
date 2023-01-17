
var generateBtn = document.querySelector("#generate");

var addNumber;
var addSymbols;
var addUppercase;
var addLowercase;

const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const symbols = "!@#$%^&*()-=`~+_{}[]<>,./?|".split("");
var selections;

generateBtn.addEventListener("click", function () {
    passy = generatePassword();
    document.getElementById("password").placeholder = passy;
});

function generatePassword() {
    enter = prompt("How many characters would you like for password? ~Choose between 8-128");
    if (!enter) {
        alert("Please enter a number");
    } else if (enter < 8) {
        enter = (alert("Please choose a number greater than 7"));        
    } else if (enter > 128) {
        enter = (alert("Please choose a number less than 129"));
    } else {
        
        addLowercase = confirm("Would you like to include lowercase letters?");
        addUppercase = confirm("Would you like to include uppercase letters?");
        addSymbols = confirm("Would you like to include symbols?");
        addNumber = confirm("Would you like to include numbers?");
       
    };

    if (!addLowercase && !uppercase && !addSymbols && !addNumber) {
        selections = alert("Please select at least one character set ya silly goose");
    } else if (addLowercase && addUppercase && addSymbols && addNumber) {
        selections = lowercase.concat(numbers, uppercase, symbols);
    } else if (addUppercase && addSymbols && addNumber) {
        selections = uppercase.concat(symbols, numbers);
    } else if (addLowercase && addSymbols && addNumber) {
        selections = lowercase.concat(numbers, symbols);
    } else if (addLowercase && addUppercase && addSymbols) {
        selections = lowercase.concat(uppercase, symbols);
    } else if (addLowercase && addUppercase && addNumber) {
        selections = lowercase.concat(uppercase, numbers);
    } else if (addSymbols && addNumber) {
        selections = symbols.concat(number);
    } else if (addLowercase && addSymbols) {
        selections = lowercase.concat(symbols);
    } else if (addUppercase && addSymbols) {
        selections = uppercase.concat(symbols);
    } else if (addLowercase && addNumber) {
        selections = lowercase.concat(number);
    } else if (addLowercase && addUppercase) {
        selections = lowercase.concat(uppercase);
    } else if (addUppercase && addNumber) {
        selections = uppercase.concat(numbers);
    } else if (addLowercase) {
        selections = lowercase;
    } else if (addUppercase) {
        selections = uppercase;
    } else if (addSymbols) {
        selections = symbols;
    } else if (addNumber) {
        selections = numbers;
    } 
     
   
    var password = [];
 
    for (var i = 0; i < enter; i++) {
        var chosenselects = selections[Math.floor(Math.random() * selections.length)];
        password.push(chosenselects);
    }

    var passy = password.join("");
    UserInput(passy);
    return passy;
}

function UserInput(passy) {
    document.getElementById("password").textContent = passy;
}
