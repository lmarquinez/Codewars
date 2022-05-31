//OPCIÓN 1:
function booleanToString1(b) {
    return String(b);
}

//OPCIÓN 2:
function booleanToString2(b) {
    return b.toString();
}

//OPCIÓN 3:
function booleanToString3(b) {
    return b + '';
}

//OPCIÓN 4:
function booleanToString4(b) {
    if (typeof b == 'boolean') {
        return String(b);
    }
}

//OPCIÓN 5:
function booleanToString5(b) {
    return `${b}`
}