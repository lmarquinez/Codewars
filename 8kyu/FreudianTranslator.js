function toFreud(string) {
    let res = [];
    let arr = string.split(' ');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '')
            res[i] = ''
        else
            res[i] = 'sex'
    }

    return res.join(' ');
}