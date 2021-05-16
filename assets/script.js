// Assignment code here
var passLength;
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "&"];
var emojis = ["🍕", "🍔", "🌭", "🍿", "🧂", "🥓"];
var newArray = [];

var generatePassword = function () {
  newArray=[]
  passLength = prompt("Choose length of password (min of 8)");
  if(passLength<8){
      alert("Refresh page and choose length between 8 and 128")
    }else{

      
      
      var emojiConfirm = confirm("Do you want to use emojis?");
      
      var number = confirm("Do you want to use numbers?");
      
      var special = confirm("Do you want to use special characters?");
      
      var upper = confirm("Do you want to use uppercase?");
      
      var lower = confirm("Do you want to use lowercase?");
    }
  
  function emojiadd() {
    if (emojiConfirm) {
      var rand = Math.floor(Math.random() * emojis.length);
      newArray.push(emojis[rand]);
    }
  }
  function numberadd() {
    if (number) {
      newArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
  }
  function specialadd() {
    if (special) {
      var specialrand = Math.floor(Math.random() * specialChar.length);
      newArray.push(specialChar[specialrand]);
    }
  }
  function upperadd() {
    if (upper) {
      newArray.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }
  }
  function loweradd() {
    if (lower) {
      newArray.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    }
  }
  console.log("newArray");
  console.log(newArray);
    var i = 0;
  var newpassword;
  while (i < passLength) {
    var sortX = Math.floor(Math.random() * 5) + 1;
    console.log("sortX" + sortX);
    if (sortX === 1) {
      emojiadd();
      console.log(newArray + "emoji");
    } else if (sortX === 2) {
      numberadd();
    } else if (sortX === 3) {
      specialadd();
    } else if (sortX === 4) {
      upperadd();
    } else if (sortX === 5) {
      loweradd();
    }
    newpassword= newpassword + newArray[i];
    i++;
  }
  
  return newArray.join("");
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
