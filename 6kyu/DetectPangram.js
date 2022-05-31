function isPangram(string) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr = string.toLowerCase().split('');
    let pangram = true;

    for (let i = 0; i < alphabet.length; i++) {
        if (!arr.includes(alphabet[i])) {
            pangram = false;
        }
    }

    return pangram;
}