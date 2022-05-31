//OPCIÓN 1:
function getDivisorsCnt(n) {
    let cont = 0;
    let mod = n;

    while (mod > 0) {
        if (n % mod === 0) {
            cont++;
        }
        mod--;
    }

    return cont;
}

//OPCIÓN 2:
function getDivisorsCnt(n) {
    let cont = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            cont++;
        }
    }

    return cont
}