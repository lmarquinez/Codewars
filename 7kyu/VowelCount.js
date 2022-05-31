//OPCIÓN 1:
function getCount1(str) {

    let vowelsCount = 0;
    const arr = str.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (arr[i] === vowels[j]) {
                vowelsCount++;
            }
        }

    }
    return vowelsCount;
}

//OPCIÓN 2:
function getCount2(str) {

    let vowelsCount = 0;
    const arr = str.split('');

    for (let i = 0; i < str.length; i++) {
        if ((arr[i] === 'a') || (arr[i] === 'e') || (arr[i] === 'i') || (arr[i] === 'o') || (arr[i] === 'u')) {
            vowelsCount++;
        }

    }
    return vowelsCount;
}

//OPCIÓN 3:
function getCount3(str) {

    let vowelsCount = 0;
    const arr = str.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(arr[i])) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

//OPCIÓN 4:
function getCount4(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

//OPCIÓN 5:
function getCount5(str) {

    var vowelsCount = 0;

    str.split("").forEach(function (x) {
        if (x == "a" | x == "e" | x == "i" | x == "o" | x == "u") {
            vowelsCount += 1;
        }
    });

    return vowelsCount;
}
