//OPCIÓN 1:
function highAndLow(numbers) {
  const arr = numbers.split(' ');
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < numbers.length; i++) {
    const number = Number(arr[i]);
    if (min > number) {
      min = number;
    }
    if (max < number) {
      max = number;
    }
  }
  return `${max} ${min}`;
}

//OPCIÓN 2:
function highAndLow2(numbers) {
  let arr = numbers.split(' ').map(Number);
  return Math.max(...arr) + ' ' + Math.min(...arr);
}

//OPCIÓN 3:
function highAndLow3(numbers) {
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

//OPCIÓN 4:
function highAndLow(numbers) {
  var arr = numbers.split(' ').sort(function (a, b) { return a - b });
  return arr[arr.length - 1] + ' ' + arr[0];
}