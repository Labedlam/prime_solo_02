// ! ! !
// Three Bugs

var arrayAtticus ={ name: "Atticus",employeeNumber:"2405", baseSalary:"47000",reviewScore:3};
var arrayJem = {name:"Jem",employeeNumber: "62347", baseSalary:"63500",reviewScore: 4};
var arrayBoo = {name:"Boo",employeeNumber: "11435", baseSalary:"54000",reviewScore: 3};
var arrayScout = {name:"Scout", employeeNumber:"6243", baseSalary:"74750",reviewScore: 5};

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);// Bug 1 found- index of the array to cycle through was not put in.
 	newEl = document.createElement('li');
	newText = document.createTextNode(newObject.prototype);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(object){
    newObject = {};

   newObject.name= array[i].name;
  //console.log(newObject.name);
  newObject.employeeNumber= array[i].employeeNumber;
 //console.log(newObject.employeeNumber) ;
  newObject.baseSalary= array[i].baseSalary;
//console.log(newObject.baseSalary);
  newObject.reviewScore= array[i].reviewScore;
//console.log(newObject.reviewScore);


  var bonus = getBaseSTI(newObject.reviewScore) + getYearAdjustment(newObject.employeeNumber) - getIncomeAdjustment(newObject.baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newObject.bonus = bonus;
  //console.log(newObject.bonus);
  newObject.annualCompensation = Math.round(newObject.baseSalary * (1.0 + bonus));// add rounding to the sum of the problem
  newObject.totalBonus = newObject.baseSalary * bonus;
  console.log(newObject.name + ", " + newObject.bonus + ", " + newObject.annualCompensation + ", " + newObject.totalBonus);
  return newObject;
  
}
//console.log(array);
function getBaseSTI(reviewScore){
  var basePercent;
  switch(newObject.reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  //console.log(basePercent);
  return basePercent ;//Bug 2 found  it was subtracting by one
 
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(newObject.employeeNumber.length == 4){  // this could be a potential issue. may need to put .array
    yearAdjustment = 0.05;
  }
  //console.log(yearAdjustment);
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
   incomeAdjustment = .01;//

  }
  //console.log(incomeAdjustment);
  return (incomeAdjustment);
}