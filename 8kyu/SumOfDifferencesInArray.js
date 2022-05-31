function sumOfDifferences(arr) {
    let res = 0;
    let descendingArr = arr.sort((a, b) => {
        if (a == b) {
            return 0;
        }
        if (a > b) {
            return -1;
        }
        return 1;
    });
    if (arr.length > 1) {
        for (let i = 0; i < descendingArr.length - 1; i++) {
            res += descendingArr[i] - descendingArr[i + 1];
        }
    }
    return res;
}