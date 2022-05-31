function factorial(n) {
    let res = 1;

    if (n < 0 || n > 12)
        throw new RangeError('Range must be between 0 and 12')

    for (let i = n; i > 0; i--)
        res *= i;

    return res;
}