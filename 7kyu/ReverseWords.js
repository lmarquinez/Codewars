//OPCIÓN 1:
function reverseStr1(str) {
    var newString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
//OPCIÓN 2:
function reverseStr2(str) {
    return str.split('').reverse().join('');
}

function reverseWords(str) {
    let arr = str.split(' ');
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0)
            res[i] = reverseStr(arr[i]);
        else
            res[i] = reverseStr(arr[i]);
    }
    return res.join(' ');
}

//OPCIÓN 3:
function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}