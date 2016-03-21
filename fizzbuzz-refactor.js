(function () {
    // Declaration of vars
    var fizzBuzz;
    
    fizzBuzz = function () {
        // Declaration of vars
        var i, output;
        
        var b = prompt("Supply a Number");
        while (isNaN(b)) {
           b = prompt("Try Again");   
        }
        
        
        for (i = 1; i < b ; i++) {
            if (i % 15 === 0) { 
                output = "FizzBuzz";
            } else if (i % 3 === 0) {
                output = "Fizz";
            } else if (i % 5 === 0) {
                output = "Buzz";
            } else {
                output = i;
            }
            console.log(output);
        }
    };
    fizzBuzz();
})();