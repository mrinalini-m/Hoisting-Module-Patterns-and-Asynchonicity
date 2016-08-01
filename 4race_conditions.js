/*
1. What is a race condition and how might you address it?
--> A race condition is when two "processes" or two events are "racing" against 
each other to see which one finishes first. Despite the same input, the outcomes 
can be different. This behavior might not always be accetable. 

Race condition can be addressed in several ways. Coordinating ordering interaction(specifying where to send the result for each process), 
by setting gates (using the && conditional),

2. What is a latch and how does it relate to race conditions?
--> A "latch" is when the nondeterministic nature of returning either result (out of several) 
is an acceptable behavior. In a race condition, both (or several) processes
run in an undefined order and return different outcomes. In a latch, we want to 
return the outcome of the first process. 

3. What is the setTimeout(..0) hack and why does it work?
--> setTimeout sets a timer and when the timer expires, the environment puts the 
callback in the event loop. It's used for async scheduling. It works because we are
able to the delay a function callback and guarantee that it won't run before the
specified time. This can allow other processes to complete and take precedence in the
event loop queue. 
*/
