//OPCIÓN 1:
function digital_root(n) {
  let arr = String(n).split('');

  while (n > 9) {
    n = 0;
    for (let i = 0; i < arr.length; i++) {
      n = n + Number(arr[i])
    }
    arr = String(n).split('');
  }
  return n;
}

//OPCIÓN 2:
function digital_root(n) {
  return (n - 1) % 9 + 1;
}