// Variables
const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDisplay = document.getElementById("output");
const romanNumeralArray = [
  ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  ["M", "MM", "MMM"]
];

// Conversion Function
const numeralConverter = (input) => {
  // Validity logic
  if (input.value === "") {
    outputDisplay.innerHTML = "Please enter a valid number";
    return;
  } else if (input.value <= -1) {
    outputDisplay.innerHTML = "Please enter a number greater than or equal to 1";
    return;
  } else if (input.value >= 4000) {
    outputDisplay.innerHTML = "Please enter a number less than or equal to 3999";
    return;
  }
  // Conversion logic
  let convertedResult = [];
  let placeValueCounter = 1;

  let strIntArray = input.value.split("");
  let numIntArray = strIntArray.map((integer) => parseInt(integer));
  
  for (const num of numIntArray) {
    if (num === 0) {
      convertedResult += String("");
    } else {
      convertedResult += romanNumeralArray[numIntArray.length - placeValueCounter][num - 1];
    }
    if (numIntArray.length > 1) {
      placeValueCounter++;
    }
  }
  outputDisplay.innerHTML = convertedResult;
}

// Calling function
convertBtn.addEventListener("click", () => {numeralConverter(userInput)});
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    numeralConverter(userInput);
  }
})