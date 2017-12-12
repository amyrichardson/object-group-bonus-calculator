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
  console.log('in calculateEmployee:', employee);
} //end calculateEmployee

calculateEmployee(scout);
