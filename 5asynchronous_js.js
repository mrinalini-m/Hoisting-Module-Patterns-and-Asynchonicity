/*
1. What does a callback represent?
-->A callback represents where the program will continue when it resumes.
It represents waiting for a single asynchronous continuation to occur.

2. What is "callback hell"? What do people usually assume callback hell is?
-->Since callbacks are asynchronous in nature, they need other 'helpers' to make sure
that the asynchronic behavior of callbacks are checked and occur in a desired order.

A "callback hell" is when certain functionalities are passed onto a 'third-party' 
function and called in another function. We're basically depending on that function call
to do it's job successfully and and in time. This inversion of control relies on the
trustability of the callback's invocation and they might not always be trustable.

It also follows a non-liner and non-sequential reasoning. 

3. Why might you choose to use a nested callback?
--> Nested callbacks allows for the inner callbacks to access variables from it's
parent callbacks.


4. Why might you choose not to use a nested callback?
-->Re-arranging a nested callback into standalone functions allows for better and
cleaner readability. 

5. Write knock knock joke function (or series of functions). The knockKnock function, 
when invoked, should console out an entire knock knock joke using the setTimeout() 
function so each component console.logs one second apart. The components of a 
knock-knock joke are:
“Knock knock”
“Who's there?”
(First response)
(First response) + “who?”
(Punch line)

*/

var knockKnockLines = ['Knock Knock', 'Who\'s there?', 'You Know', ' who?', 'Exactly!']

var knockKnock = function(line, callback) { 
  console.log(line);
  callback();
}

function KnockKnockLog(i) {
  if (i < knockKnockLines.length) {
    if (i === 3) {
      knockKnockLines[i] = knockKnockLines[i - 1] + knockKnockLines[i];
    }

    knockKnock(knockKnockLines[i], function(){
      setTimeout(function() {
        KnockKnockLog(i+1);
      }, 1000); 
    });

  }
}
KnockKnockLog(0);

// function KnockKnockLog(i) {
//   if (i < knockKnockLines.length) {
//     if (i === 2) {
//       knockKnockLines[i] = prompt();
//       if (knockKnockLines[i] === undefined) {
//         knockKnockLines[i] = 'You Know';
//       }
//     } else if (i === 3) {
//       knockKnockLines[i] = knockKnockLines[i - 1] + knockKnockLines[i];
//     }

//     knockKnock(knockKnockLines[i], function(){
//       setTimeout(function() {
//         KnockKnockLog(i+1);
//       }, 1000); 
//     });

//   }
// }


// var knockKnock = function() {
//   var response;
//   console.log('Knock Knock');
//   setTimeout(function() {
//     console.log('Who\'s there?');
//   }, 1000);
//   setTimeout(function() {
//     response = 'You know';
//   }, 2000)
//   setTimeout(function() {
//     console.log(response + " who?");
//   }, 3000);
//   setTimeout(function(){
//     console.log('Exactly!')
//   }, 4000);
// }

/*
6. What is the eventual output of this snippet? Approximately how long does it take to run?
*/

var a = 1;

setTimeout( function(){
  a = a * 2;

  setTimeout( function(){
     a = a * 3;
  }, 500 );
}, 100 );

setTimeout( function(){
  a = a + 1;

  setTimeout( function(){
     console.log( a );
  }, 500 );
}, 250 );

/*
--> The return value will be 9. It'll tabke about 750ms.

8. Rewrite the previous snippet to not use nested inline function expressions. 
Name each function like step1(),step2(), etc. Describe any observations you may 
have about the readability of this version of the snippet compared to the previous version.

*/
var step1 = function() {
  setTimeout( function(){
  a = a * 2;
  
  }, 100 );
}

var step2 = function() {
  setTimeout( function(){
    a = a + 1;
  }, 250 );
}

var step3 = function() {
  setTimeout( function(){
     a = a * 3;
  }, 500 );
}


var step4 = function() {
  setTimeout( function(){
     console.log( a );
  }, 500 );
}

/*
-->Taking the functions out definitely makes it easier to read.

9. Complete/rearrange this snippet so that it keeps going as long as each 
request returns a new record to process:

*/

var record = "abc";

ajax( "http://some.url/api", record, function(nextRecord){
  // TODO: if set, process `nextRecord` in the same //way
} );

