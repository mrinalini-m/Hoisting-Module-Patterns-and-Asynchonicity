/*

Module Pattern Exercises:

1. Explain what it takes to make something a module.
--> i) There has to be at least one outer function that needs to be invoked at least once.
ii) It has to return as least one inner function which calls upon the "private" variables of the
enclosing functions or has closure over the inner details.

2. What are the two main characteristics of the module pattern?
--> i) There has to be at least one outer function that needs to be invoked at least once.
ii) It has to return as least one inner function which calls upon the "private" variables of the
enclosing functions or has closure over the inner details.

3. Why is modularizing code important/good?
--> It's important/good because it allows us to "hide" certain variables/functions that
we don't want to be directly accessible. However, they can still be used or accessed by assigning them to
a function or object that can accessed outside the modular function.


4. Write a module that has at least three inner variables, three inner functions (that use 
those variables), and two methods that are returned and exposed/able to be used 
outside the module.
-->
*/

var modularFunc = (function() {

  var name = 'Harry Vernon Potter',
      ssn = '000-00-1234',
      birthday = '08/05/1988';

  function privateNameChange(newName) {
    name = newName;
  }

  function publicBirthdayGreeting() {
    for (var i = 0; i < name.length; i++) {
      if (name.charAt(i) === ' ');
      var firstName = name.slice(0,i+1);
    }
    var date = new Date();
    var curYear = date.getFullYear();
    var age = curYear - birthday.slice(birthday.length - 4, birthday.length)
    console.log("Congratulations " + firstName + ' on your ' + age + 'th Birthday!!')  
  }

  function identityVerification(){
    console.log('ssn last four digits are: ' + ssn.slice(ssn.length - 4, ssn.length))
  }

  return {
    changeName : privateNameChange,
    greeting: publicBirthdayGreeting,
    identityVerification: identityVerification
  }
})();

modularFunc.changeName("Dudley")
modularFunc.identityVerification();
modularFunc.greeting()


/*
5. Take this code and modularize it to make it easier to read and more logical, also “hiding” any outside access to variables where possible: https://repl.it/Cgzy/8

*/

