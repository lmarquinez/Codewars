//OPCIÓN 1:
function findUniq(arr) {
    let repetNum;
    if (arr[0] === arr[1]) {
        if (arr[1] === arr[2]) {
            repetNum = arr[0];
        }
        else {
            return arr[2];
        }
    }
    else {
        if (arr[1] === arr[2]) {
            return arr[0];
        }
        else {
            return arr[1];
        } 
    }
    for(let i = 3; (i < arr.length); i++) {
        if (arr[i] !== repetNum) {
            return arr[i];
        }
    }
}
