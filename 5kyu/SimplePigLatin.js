function newWord(letter, str) {
    str += letter + 'ay';
    return str;
}

function pigIt(str) {
    let arr = str.split(' ');
    let res = '';

    for (let i = 0; i < arr.length; i++) {
        if (i === 0)
            res += newWord(arr[i].slice(0, 1), arr[i].slice(1));
        else {
            if (arr[i] === '!' || arr[i] === '?')
                res += ' ' + arr[i];
            else
                res += ' ' + newWord(arr[i].slice(0, 1), arr[i].slice(1));
        }
    }
    return res;
}