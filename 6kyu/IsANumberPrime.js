//OPCIÓN 1:
const isPrime1 = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
            return false;
    return num > 1;
}

//OPCIÓN 2:
function isPrime2(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1
}

