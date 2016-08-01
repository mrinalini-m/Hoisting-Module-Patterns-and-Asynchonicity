/*5. Take this code and modularize it to make it easier to read and more logical, 
also “hiding” any outside access to variables where possible: https://repl.it/Cgzy/8
*/


var employeeDirectory = {
  Adam: {salary: 100000, department: "engneering", yearsAtCompany: 3},
  Betty: {salary: 40000, department: "customer service", yearsAtCompany: 3},
  Charlie: {salary: 500000, department: "marketing", yearsAtCompany: 1},
  Deborah: {salary: 85000, department: "finance", yearsAtCompany: 2},
  Evan: {salary: 100000, department: "engneering", yearsAtCompany: 2},
  Francine: {salary: 40000, department: "marketing", yearsAtCompany: 1},
  Grant: {salary: 500000, department: "marketing", yearsAtCompany: 3},
  Hermione: {salary: 85000, department: "finance", yearsAtCompany: 3},
  Ike: {salary: 45000, department: "customer service", yearsAtCompany: 1},
  Jean: {salary: 100000, department: "marketing", yearsAtCompany: 7},
  Kobe: {salary: 105000, department: "engneering", yearsAtCompany: 5},
  Lauren: {salary: 500000, department: "marketing", yearsAtCompany: 2},
  Murry: {salary: 100000, department: "engneering", yearsAtCompany: 2},
  Nancy: {salary: 120000, department: "finance", yearsAtCompany: 9},
  Ollie: {salary: 85000, department: "marketing", yearsAtCompany: 3},
  Patrice: {salary: 100000, department: "engneering", yearsAtCompany: 2},
  Rob: {salary: 102000, department: "engneering", yearsAtCompany: 4},
  Sarah:  {salary: 500000, department: "finance", yearsAtCompany: 2},
  Tom:  {salary: 20000, department: "customer service", yearsAtCompany: 1},
  Ursula: {salary: 40000, department: "customer service", yearsAtCompany: 2},
  Victor: {salary: 100000, department: "marketing", yearsAtCompany: 5},
  Winnie: {salary: 85000, department: "finance", yearsAtCompany: 6}
};



var refactored = {};

for(var key in employeeDirectory) {
  var employee = key;
  employee = {};
  employee.salary = employeeDirectory[key].salary; 
  employee.yearsAtCompany = employeeDirectory[key].yearsAtCompany;
  
  if (refactored[employeeDirectory[key].department] === undefined) {
    refactored[employeeDirectory[key].department] = {};
  }
  if (refactored[employeeDirectory[key].department]) {
    refactored[employeeDirectory[key].department][key] = employee;
  }
}


// employeeDirectory = refactored
// console.log(employeeDirectory);

var makerSquared = (function(){
  var CEOSalary = 2000000;
  var employeeDirectory = { 
    engineering: {
      Adam: { salary: 100000, yearsAtCompany: 3 },
      Evan: { salary: 100000, yearsAtCompany: 2 },
      Kobe: { salary: 105000, yearsAtCompany: 5 },
      Murry: { salary: 100000, yearsAtCompany: 2 },
      Patrice: { salary: 100000, yearsAtCompany: 2 },
      Rob: { salary: 102000, yearsAtCompany: 4 } 
    },
    'customer service': {
      Betty: { salary: 40000, yearsAtCompany: 3 },
      Ike: { salary: 45000, yearsAtCompany: 1 },
      Tom: { salary: 20000, yearsAtCompany: 1 },
      Ursula: { salary: 40000, yearsAtCompany: 2 } 
    },
    marketing: { 
      Charlie: { salary: 500000, yearsAtCompany: 1 },
      Francine: { salary: 40000, yearsAtCompany: 1 },
      Grant: { salary: 500000, yearsAtCompany: 3 },
      Jean: { salary: 100000, yearsAtCompany: 7 },
      Lauren: { salary: 500000, yearsAtCompany: 2 },
      Ollie: { salary: 85000, yearsAtCompany: 3 },
      Victor: { salary: 100000, yearsAtCompany: 5 } 
    },
    finance: {
      Deborah: { salary: 85000, yearsAtCompany: 2 },
      Hermione: { salary: 85000, yearsAtCompany: 3 },
      Nancy: { salary: 120000, yearsAtCompany: 9 },
      Sarah: { salary: 500000, yearsAtCompany: 2 },
      Winnie: { salary: 85000, yearsAtCompany: 6 } 
    } 
  }

  function findHighestPaidEmployee() {
    var highest = 0;
    var who;

    for (var department in employeeDirectory) {
      for (var employee in employeeDirectory[department]) {

        var fellow = employeeDirectory[department][employee];
        if (highest < fellow.salary) {
          highest = fellow.salary;
          who = employee;
        } else if (highest === fellow.salary) {
          who = who + " and " + employee;
        }

      }
    }
    return who + ' are taking us out to dinner tonight.';
  }

  function findMostExpensiveDepartment (directory){
    var highest = 0;
    var who;
    var deptTot = {}
    for (var department in employeeDirectory) {
      for (var employee in employeeDirectory[department]) {

        var fellow = employeeDirectory[department][employee];
        var dept = employeeDirectory[department];

        if (deptTot.total === undefined) {
          deptTot.total = 0;
        }
        
        deptTot.total += fellow.salary;

        if (deptTot.total > highest) {
          highest = deptTot.total;
          who = department;
        } else if (deptTot.total === highest) {
          who = who + ' and ' + department;
        }
      }
      
    }
    return 'The ' + who + ' department is bleeding us dry!'
  }

  function findHighestPayingDepartment(directory){
    var longest = 0;
    var oldestEmployee;
    var meagreSalary;

    for (var department in employeeDirectory) {
      for (var employee in employeeDirectory[department]) {

        var fellow = employeeDirectory[department][employee];
        var dept = employeeDirectory[department];

        if (fellow.yearsAtCompany > longest) {
          longest = fellow.yearsAtCompany;
          oldestEmployee = employee;
          meagreSalary = fellow.salary;
        } 
      }  
    }
    return oldestEmployee + ' needs to ask for a raise. She earns ' + (CEOSalary - meagreSalary) + ' less than the CEO. And she has been here ' + longest + ' years!!'
  }

  function newEmpolyees(directory) {
    var newMinions = '';
    for (var department in employeeDirectory) {
      for (var employee in employeeDirectory[department]) {

        var fellow = employeeDirectory[department][employee];
        var dept = employeeDirectory[department];

        if (fellow.yearsAtCompany < 2) {
          newMinions = newMinions + ", " + employee;
        } 
      }
    }
    return newMinions.slice(1) + ' have been embedded with our control chips.';
  }

  function departmentCount(directory){
    var herdCount = {};
    
    for (var department in employeeDirectory) {
      for (var employee in employeeDirectory[department]) {
        var fellow = employeeDirectory[department][employee];
        
        var dept = employeeDirectory[department];

        if (herdCount[department] === undefined) {
          herdCount[department] = 1;
        } else {
          herdCount[department]++;
        }
        
        if (herdCount === department) {
          herdCount[department]++;
        }
      }
    }
    return herdCount;
  }

  return {
    richestFellow : findHighestPaidEmployee,
    whosBleedingUsDry: findMostExpensiveDepartment,
    itsTimeForARaise: findHighestPayingDepartment,
    newMinions: newEmpolyees,
    howManyInTheHerd: departmentCount

  };

})();


console.log(makerSquared.richestFellow());
console.log(makerSquared.whosBleedingUsDry());
console.log(makerSquared.itsTimeForARaise());
console.log(makerSquared.newMinions());
console.log(makerSquared.howManyInTheHerd());





