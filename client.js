class Employee {

  constructor( name, employeeNumber, annualSalary, reviewRating ) {
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;

  } // end constructor
} // end Employee class


var atticus = new Employee ("Atticus", "2405", "47000", 3); //invoke constructor
var jem = new Employee ("Jem", "62347", "63500", 4);
var boo = new Employee ("Boo", "11435", "54000", 3);
var scout = new Employee ("Scout", "6243", "74750", 5);
var robert = new Employee ("Robert", "26835", "66000", 1);
var mayella = new Employee ("Mayella", "89068", "35000", 2);

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

function calculateEmployee(employee) {
  var bonusPercentage = 0;
  bonusPercentage += calculateReviewRatingBonus(employee.reviewRating); //add reviewRatingBonus 
  //employee number
  if(employee.employeeNumber.length === 4) {
    bonusPercentage += 0.05;
  } //end employee number length
  //max salary
  if(Number(employee.annualSalary) > 65000) {
    bonusPercentage -= 0.01;
  } // end annual salary
  //min/max bonus
  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  } else if (bonusPercentage < 0.0) {
    bonusPercentage = 0.0;
  } //end min/max check
  //return an object
  var objectToReturn = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: Number(employee.annualSalary) + Number(employee.annualSalary) * bonusPercentage,
    totalBonus: Number(employee.annualSalary) * bonusPercentage
  }; //end object to return
  return objectToReturn;
} //end calculateEmployee

function calculateEveryEmployee() {
  console.log('in calculateEveryEmployee');
  //loop through employees array and send each to be calculated
  var employeesBonusInfo = [];
  for (var i = 0; i < employees.length; i++) {
    console.log('calculating', employees[i]);
    employeesBonusInfo.push(calculateEmployee(employees[i]));
  } //end for loop
  return employeesBonusInfo;
} //end calculateEveryEmployee

function calculateReviewRatingBonus(reviewRating) {
  console.log('in calculateReviewRatingBonus', reviewRating);
  //calculate review reviewRating
  if(reviewRating === 3) {
    return 0.04;
  } //end 3
  else if (reviewRating === 4) {
    return 0.06;
  } //end 4
  else if (reviewRating === 5) {
    return 0.1;
  } //end 5
  else {
    return 0.0;
  } //end other
} //end calculateReviewRatingBonus
