function towerBuilder(nFloors) {
    let res = [];
    for (let i = nFloors; i > 0; i--) {
        res.push(' '.repeat(nFloors - i) + '*'.repeat(2 * i - 1) + ' '.repeat(nFloors - i));
    }
    return res.reverse();
}