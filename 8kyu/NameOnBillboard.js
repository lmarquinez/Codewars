function billboard(name, price = 30) {
    let res = 0;

    for (let i = 1; i <= name.length; i++) {
        res += price
    }

    return res;
} 