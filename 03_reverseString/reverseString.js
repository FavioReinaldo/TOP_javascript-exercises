const reverseString = function(string) {
    let result = "";
    for (let index = string.length-1; index > -1 ; index--) {
        result += string[index];
    }
    return result;

    /* return string.split('').reverse().join(''); */
};

// Do not edit below this line
module.exports = reverseString;
