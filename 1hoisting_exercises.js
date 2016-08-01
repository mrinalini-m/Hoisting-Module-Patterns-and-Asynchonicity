/*
Hoisting Exercises:

1. What does "lexical scope" mean?
--> Lexical scope means that a variable defined inside a block of code cannot be referenced 
outside the block.  

2. How does "hoisting" work, and how is it related to the JavaScript compiler?
--> "Hoisting" is when the compiler finds variable and function declarations and 
asssigns them to their appropriate scopes. All declarations are moved to the top 
of their scopes. 

3. What is closure and how is it different from just lexical variable look-up?
--> Closure is when a function "closes over" or wraps around another function. So the function
that gets closed over has access to the variable that was created at the time of it's
enclosing function call.

Lexical variable look up determines scope rules statically at compile-time. 


4. Explain how functions and variables are hoisted differently.
--> For variables only the variable names are "hoisted" or moved to the top of their appropriate scope.
For functions, both the function name and function assignment are "hoisted" or moved to the top.

5. Why does this work? Explain it in terms of hoisting? https://repl.it/CgzE/1
--> This works because of "hoisting". The variable declarations are moved to the
top of their appropriate scope. So, wherever they are declared in the page, even
if it's under the variable assignment, it doesn't matter.

6. Why doesn’t this variation on it work? https://repl.it/CgzE/2
--> It doesn't work because even though the variable declarations, function declarations and 
function assignments are moved or hoisted to the top, the variable assignments are not. 
As such, the function is being invoked before the variables have been assigned. So at the time
of the function call, the variables are undefined.

7. Write a function within a function that uses scope to access a variable within the outer function.

*/

var closingFunc = function(factor) {
  return function(multiple) {
    return factor * multiple;
  }
}

console.log(closingFunc(5)(4)); //-->20

/*

8. What error message will this log?  How will you fix it, knowing the rules of hoisting? https://repl.it/ChBi/2
--> 'gotLost' is not a function declaration. It is a variable declaration that has been assigned an 
anonymous function. So only the variable declaration will be hoisted to the top of the scope(which is roundTrip).
We're trying to return the call of an undefined function which will throw an error.

TypeError: "gotLost" is not a function

To fix this, we can change the variable delcaration of gotLost to a function declaration.

*/


function roundTrip(distance) {
  return gotLost(distance * 2, 2);

  function gotLost( idealTrip, wrongTurns ) {
    if ( idealTrip > 3 ) {
      var didntAskForDirections = oneWay * idealTrip * wrongTurns;
      return didntAskForDirections + idealTrip;
    }
    return idealTrip + 1;
  }
}

/*

9. What numbers will this log? How will you use closure to fix it? https://repl.it/ChCt/0
--> logs:
5
5
5
5
5

*/

function enclosure(i) {
  setTimeout(function() { console.log(i); }, 1000);
}

for (var i = 0; i <5; ++i) {
  enclosure(i);
}

/*








































*/
