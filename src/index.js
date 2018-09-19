module.exports = function solveEquation(equation) {
	
the_first_multiply_sing = equation.indexOf("*"); 

the_second_multiply_sing = equation.indexOf("*", the_first_multiply_sing + 1); 

a=equation.substring(0,the_first_multiply_sing - 1); 
b=equation.substring(the_first_multiply_sing + 6, the_second_multiply_sing - 1); 
c=equation.substring(the_second_multiply_sing + 4); 


b=b[0]+b.substring(2); 

c=c[0]+c.substring(2); 

var D = b * b - 4 * a * c; 


solution1 = Math.round((- b + Math.sqrt(D)) / (2 * a)); 

solution2 = Math.round((- b - Math.sqrt(D)) / (2 * a)); 

var array = []; 

if ( solution2 > solution1 ) { array[0] = solution1; array[1] = solution2; } 
else { array[0] = solution2; array[1] = solution1; } 


return array;
 
}
