module.exports = function solveEquation(equation) {
	
  let firstMultiplySing = equation.indexOf("*");
  let secondMultiplySing = equation.indexOf("*", firstMultiplySing + 1); 
  
  let a = equation.substring(0, firstMultiplySing - 1); 
  let b = equation.substring(firstMultiplySing + 6, secondMultiplySing - 1); 
  let c = equation.substring(secondMultiplySing + 4);
  
  b = b[0] + b.substring(2); 
  c = c[0] + c.substring(2);
  
  let d = b * b - 4 * a * c; 
  let solution1 = Math.round( ( - b + Math.sqrt(d) ) / ( 2 * a ) ); 
  let solution2 = Math.round( ( - b - Math.sqrt(d) ) / ( 2 * a ) ); 

  let array = []; 

  if ( solution2 > solution1 ) { 
     array[0] = solution1;
     array[1] = solution2; } 
  
  else { 
      array[0] = solution2; 
	  array[1] = solution1; } 

  return array;
  
}
