//OPCIÓN 1:
function testEven1(n) {
    return n % 2 === 0;
}

//OPCIÓN 2:
function testEven2(n) {
    return !(n % 2);
}

//OPCIÓN 3:
function testEven3(n) {
    return n % 2 === 0 ? true : false;
}

//OPCIÓN 4:
const testEven4 = n => n % 2 === 0;
