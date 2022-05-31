//OPCIÓN 1:
function checkExam(array1, array2) {
    let note = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            note += 4;
        } else if (array2[i] === '') {
            note -= 0
        } else {
            note -= 1
        }
    }
    if (note < 0)
        note = 0;

    return note;
}