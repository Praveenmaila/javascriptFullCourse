const pi = 3.14;  
console.log("The value of Pi is: "+pi);  
  
pi = 3.141592; /* This will throw an error because the assignment to a const needs to be done at the time of declaration and it cannot be re-initialized. */ 
console.log("The value of Pi is: "+pi); 
