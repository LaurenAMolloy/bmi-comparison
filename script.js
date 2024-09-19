/*Task Mark and John want to compare their BMI using the following formula:
BMI = mass/ (height * height)
Task 1: Store data in variables
Task 2: Calculate BMI using the formula
Task 3: Create a boolean variable containing information about whether Mark has 
a bigger BMI than John
*/

const displayMarkWeight = document.querySelector(".weight-mark");
const displayMarkHeight = document.querySelector(".height-mark");
const displayJohnWeight = document.querySelector(".weight-john");
const displayJohnHeight = document.querySelector(".height-john");
const dataSetButton = document.querySelector("#changeDataSet");
const resultsReveal = document.querySelector(".results-reveal");
const displayBMIMark = document.querySelector(".bmi-display-mark");
const displayBMIJohn = document.querySelector(".bmi-display-john");
const results = document.querySelector(".results-text");


//Data Set 1//
//objects to store data1 and data 2
const dataSet1 = {
  markWeight: 78,
  markHeight: 1.69,
  johnWeight: 92,
  johnHeight: 1.95
};

const dataSet2 = {
  markWeight: 95,
  markHeight: 1.88,
  johnWeight: 85,
  johnHeight: 1.76
};

//function expression to calculate BMI
//How can I use an arrow function to do the same job?
const calculateBMI = function (weight, height) {
  return (weight / (height * height)).toFixed(2);
};

//boolean variable to keep track of which dataset is being used
let isDataSet1 = true; // Initially use Data Set 1


// Function to update and display the results
const updateBMIResults = function () {
  //ternary operator to check which dataset is true 
  const currentData = isDataSet1 ? dataSet1 : dataSet2;
  if (isDataSet1) {
    results.innerText = "Using Data Set 1 Mark has the greater BMI.True or False?"
    dataSetButton.innerText = "SWITCH TO DATA SET 2"
  } else {
    results.innerText = "Using Data Set 2 Mark has the greater BMI.True or False?"
    dataSetButton.innerText = "SWITCH TO DATA SET 1";
  }

  //Update the dataset in the dom
  displayMarkWeight.innerText = `Weight: ${currentData.markWeight} kg`;
  displayMarkHeight.innerText = `Height: ${currentData.markHeight}`;
  displayJohnWeight.innerText = `Weight: ${currentData.johnWeight} kg`;
  displayJohnHeight.innerText = `Height: ${currentData.johnHeight}`;

  //Calculate BMI for each person//
  const markBMI = calculateBMI(currentData.markWeight, currentData.markHeight);
  const johnBMI = calculateBMI(currentData.johnWeight, currentData.johnHeight);

  displayBMIMark.innerText = `BMI: ${markBMI}`;
  displayBMIJohn.innerText = `BMI: ${johnBMI}`;

  let markHasHigherBMI = markBMI > johnBMI;
  resultsReveal.innerText = `${String(markHasHigherBMI).toUpperCase()}`;
};

dataSetButton.addEventListener("click", function () {
  isDataSet1 = !isDataSet1; // Toggle between data sets
  updateBMIResults(); // Update the BMI results with the new data set
});

// Initially show results for Data Set 1
updateBMIResults();






