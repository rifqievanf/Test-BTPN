function countCharacters(str) {
    const result = {};

    str = str.toLowerCase();

    for (let char of str) {
        if (char === " ") {
            continue;
        }

        if (result[char]) {
            result[char]++;
        } else{
            result[char] = 1;
        }
    }
    return result;
}

console.log(countCharacters("Hello World"));
console.log(countCharacters("HAhaHAhaHAha"));