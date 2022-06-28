function nbYear(p0, percent, aug, p) {
    const percentage = percent / 100;
    let result = p0;
    let years = 0;

    while (result <= p) {
        result += result * percentage + aug;
        years++;
    }

    return years;
}