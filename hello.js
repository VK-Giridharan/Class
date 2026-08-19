const number = 40;
try {
    if(number > 50) {
        console.log('Success');
    }
    else {
console.log('hello');
        // user-defined throw statement
        throw new Error('The number is low');
         
    }

    // if throw executes, the below code does not execute
   
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}