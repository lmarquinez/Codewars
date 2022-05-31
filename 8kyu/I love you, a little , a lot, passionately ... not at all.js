//OPCIÓN 1:
function howMuchILoveYou1(nbPetals) {
    const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];

    for (let i = 0; i < nbPetals; i++) {
        arr.push(arr[i]);
    }
    return arr[nbPetals - 1];
}

//OPCIÓN 2:
function howMuchILoveYou2(nbPetals) {
    switch ((nbPetals - 1) % 6) {
        case 1:
            return "a little";
        case 2:
            return "a lot";
        case 3:
            return "passionately";
        case 4:
            return "madly";
        case 5:
            return "not at all";
        default:
            return "I love you";
    }
}