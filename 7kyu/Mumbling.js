function accum(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (i === 0)
            res += s.charAt(i).toUpperCase() + (s.charAt(i).toLowerCase()).repeat(i);
        else
            res += '-' + s.charAt(i).toUpperCase() + (s.charAt(i).toLowerCase()).repeat(i);
    }
    return res;
}