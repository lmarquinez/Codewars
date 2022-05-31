function getMiddle(s) {
    let res = '';
    if (s.length % 2 !== 0) {
        res = s[Math.floor(s.length / 2)];
    } else {
        res = s[s.length / 2 - 1] + s[s.length / 2];
    }
    return res;
}