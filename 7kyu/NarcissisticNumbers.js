//OPCIÓN 1:
function isNarcissistic1(n) {
  let cont = 0;
  const arr = String(n).split('');

  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);
    const pow = Math.pow(num, arr.length);
    cont += pow;
  }
  return n === cont;
}

//   1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
isNarcissistic(153); // true
isNarcissistic(7); // true
isNarcissistic(1652); // false

//OPCIÓN 2:
function isNarcissistic2(n) {
  let cont = 0;
  let digits = String(n);

  for (let i = 0; i < digits.length; i++) {
    cont += Number(digits[i]) ** digits.length;
  }

  return cont === n;
}