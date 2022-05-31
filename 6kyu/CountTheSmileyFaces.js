function checkSmiley1(str) {
    let isSmiley = false;

    if (str.length === 2) {
        isSmiley = (str.charAt(0) === ':' || str.charAt(0) === ';') && (str.charAt(1) === ')' || str.charAt(1) === 'D');
    }

    if (str.length === 3) {
        isSmiley = (str.charAt(0) === ':' || str.charAt(0) === ';') && (str.charAt(1) === '-' || str.charAt(1) === '~') && (str.charAt(2) === ')' || str.charAt(2) === 'D');
    }
    return isSmiley;
}

function checkSmiley2(str) {
    let isSmiley = false;
    const eyes = [':', ';'];
    const nose = ['-', '~'];
    const nouth = [')', 'D'];

    if (str.length === 2) {
        isSmiley = 
    }
    if (str.length === 3) {
        isSmiley = 
    }

    return isSmiley;
}

function countSmileys(arr) {
    let cont = 0;
    for (let i = 0; i < arr.length; i++) {
        if (checkSmiley(arr[i])) {
            cont++;
        }
    }
    return cont;
}