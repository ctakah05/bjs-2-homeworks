"use strict";
function solveEquation(a, b, c) {
  let arr;
  const dis = b**2-4*a*c;
  arr=[]
 if (dis === 0) {
   arr=[-b/(2*a)];
  } else if (dis >0) { 
   arr=[((-b + Math.sqrt(dis))/(2*a)),((-b - Math.sqrt(dis)) /(2*a))]
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
