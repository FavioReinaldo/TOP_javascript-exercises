const removeFromArray = function(...args) {
    let resultado = [];
    let basedArray = args[0];
    basedArray.forEach(element => {
        if (!args.includes(element)) {
            resultado.push(element);
        }  
    });
    return resultado;
    /*
    const array = args[0]
    return array.filter(val => !args.includes(val)) 
    */
};

// Do not edit below this line
module.exports = removeFromArray;
