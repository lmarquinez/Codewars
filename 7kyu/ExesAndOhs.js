//OPCIÓN 1:
function XO(str) {
    let contX = 0;
    let contO = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x')
            contX++;
        if (str[i].toLowerCase() === 'o')
            contO++;
    }

    if (contX === contO)
        return true;
    else
        return false;
}

//OPCIÓN 2:
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

//OPCIÓN 3:
function XO(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == 'x')
            sum++;
        if (str[i].toLowerCase() == 'o')
            sum--;
    }
    return sum == 0;
}
