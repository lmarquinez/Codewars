//OPCIÓN 1:
function countPositivesSumNegatives(input) {

    let positiveCount = 0;
    let negativeCount = 0;
    let resArr = [];

    if (input !== null) {
        if (input.length !== 0) {
            for (let i = 0; i < input.length; i++) {
                if (input[i] > 0) {
                    positiveCount++;
                } else {
                    negativeCount += input[i];
                }
            }
            resArr[0] = positiveCount;
            resArr[1] = negativeCount;
        }
    }

    return resArr;
}

//OPCIÓN 2:
function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || !input.length)
        return [];
    return input.reduce((arr, n) => {
        if (n > 0)
            arr[0]++;
        if (n < 0)
            arr[1] += n;
        return arr;
    }, [0, 0]);
}

//OPCIÓN 3:
function countPositivesSumNegatives(input) {
    if (!input || input.length == 0)
        return [];
    let sum = 0;
    let count = 0;
    input.forEach((elem) => {
        if (elem > 0)
            count++;
        else
            sum += elem;
    });
    return [count, sum];
}