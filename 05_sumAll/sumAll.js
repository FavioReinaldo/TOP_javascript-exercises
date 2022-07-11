const sumAll = function(initialNum, finalNum) {
     let result = 0;
    if (initialNum < 0 || !Number.isInteger(finalNum)) {
        return 'ERROR';
    } else {
        if (initialNum>finalNum) {
            let aux = initialNum;
            initialNum = finalNum;
            finalNum = aux;
        }
        while (initialNum <= finalNum) {
            result = result + initialNum;
            initialNum += 1;
        }
        return result;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
