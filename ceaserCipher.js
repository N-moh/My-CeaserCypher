//improved code that encrypts as well as decrypts the text
//many number of shifts (as the key) are possible
//makes sure that the plain text is all in lowercase
//handles spaces,special characters and numbers,then passes it on 

const alphabet = [
  "a","b","c","d","e","f",
  "g","h","i","j","k","l",
  "m","n","o","p","q","r",
  "s","t","u","v","w","x",
  "y","z" 
];

function encryptText() {

const form = document.forms[0];

let title=
document.getElementById("titleId");  
 
title.innerHTML = "Encrypted text";

let shift= Number(form.shift.value); 
 
let sourceText =  
form.sourceText.value;       
 
form.sourceText.value 
= [... sourceText ].map(char =>
  encrypt(char, shift)).join('');
}

function decryptText() {
const form = document.forms[0];
let title = document.getElementById("titleId");       

title.innerHTML = "Plain text";
   
let shift =   
Number(form.shift.value);
let sourceText = 
form.sourceText.value;    
 
shift = 
 (alphabet.length - shift) %  
  alphabet.length;

form.sourceText.value 
  = [... sourceText ].map(char => 
    encrypt(char,    
    shift)).join('');
}

function encrypt(char, shift) {
let include =        
alphabet.includes(
char.toLowerCase()); 
 
if (include){      
let position =         
alphabet.indexOf(
 char.toLowerCase());
  
let newPosition = 
(position+shift) %  
  alphabet.length;
return alphabet[newPosition];
}else  return char;
}        