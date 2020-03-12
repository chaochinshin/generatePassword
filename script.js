// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

var length = 0
var randomPassword = ""
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"; //['Q', 'W'...]
var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var numbers = "0123456789";
var symbols = "!@#$%^&*()";

function generatePassword(){
  
  randomPassword = ""
  var doIGeneratePassword = confirm("Do you want to generate password?"); //true or false
  if (!doIGeneratePassword) {
    alert("Cannot generate password.");
    return "";
  } else {
    //prompt reads questions as strings, + sign will make computer reads as strings and convert into numbers
    length = +prompt('How many characters?  Please select at least 8 characters and no more than 128 characters.');
  }
    // || means or
    while (length < 8 || length > 128)  {
      length = +prompt('How many characters?  Please select at least 8 characters and no more than 128 characters.');
    }

  //ask if i want uppercase letters
  var doIWantUppercase = confirm("Do you want uppercase letters?");
  var doIWantLowercase = confirm("Do you want lowercase letters?");
  var doIWantNumbers = confirm("Do you want numbers?");
  var doIWantSymbols = confirm("Do you want symbols?");

  //strings below
  var characters = "";
  if  (doIWantUppercase) {
    characters += upperCase;
  }
  if  (doIWantLowercase) {
    characters += lowerCase;
  }
  if  (doIWantNumbers) {
    characters += numbers;
  }
  if  (doIWantSymbols) {
    characters += symbols;
  }

  //telling computer when user didn't pick the selection, it will keep asking if none are picked.

  while (characters.length === 0){
  doIWantUppercase = confirm("Do you want uppercase letters?");
  doIWantLowercase = confirm("Do you want lowercase letters?");
  doIWantNumbers = confirm("Do you want numbers?");
  doIWantSymbols = confirm("Do you want symbols?");

  if  (doIWantUppercase) {
    characters += upperCase;
  }
  if  (doIWantLowercase) {
    characters += lowerCase;
  }
  if  (doIWantNumbers) {
    characters += numbers;
  }
  if  (doIWantSymbols) {
    characters += symbols;
  }
  }

  //ask if i want lowercase letters
  //ask if I want numbers
  //ask if I special characters

  //make a for loop that is looping for the length of our random password
  // and adding chracters that we allowed.
  for (var i=0; i<length; i++) {
    randomPassword = randomPassword + characters[Math.floor(Math.random()* characters.length)];
    //how do you make sure the randomPassword isnt too long
  }

  //the text area is the html element
  document.getElementById("password").value=randomPassword;
  //return randomPassword;
}


