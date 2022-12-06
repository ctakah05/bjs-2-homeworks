"use strict";
function solveEquation(a, b, c) {
  let arr;
  arr = b**2-4*a*c;
  if (arr < 0) {
   arr=[];
   return arr; 
  } else if (arr === 0) {
   arr=[-b/(2*a)];
   return arr;
  } else { 
   arr=[Math.round((-b + Math.sqrt(b) )/(2*a)),Math.round((-b - Math.sqrt(b) )/(2*a))]
   return arr; // array
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
