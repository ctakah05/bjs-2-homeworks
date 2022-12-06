// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min=arr[0];
  max=arr[0];
  avg=0;
  for (let i=0; i < arr.length; i++) {
    avg += arr[i]
    if (min > arr[i]) {
      min=arr[i];
    }
    if (max < arr[i]) {
      max=arr[i]
    }
  }
  avg = (avg/arr.length).toFixed(2)
  avg = Number(avg)
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum =0;
    for (let i=0; i < arr.length; i++){
     sum += arr[i]
    }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i=0; i < arrOfArr.length; i++){
  let sum = func(arrOfArr[i]);
  if (sum > max){
    max = sum
  }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min= 0;
  let max= 0;
  avg=0;
  for (let i=0; i < arr.length; i++) {
    min=arr[0]
    max=arr[0]
    if (min > arr[i]) {
      min=arr[i];
    }
    if (max < arr[i]) {
      max=arr[i]
    }
  }
  console.log(max, min)
  return Math.abs(max-min)
}

