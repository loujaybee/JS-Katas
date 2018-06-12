
const reduce = function(data, operation, start = 0 ){

    let result = start;

    for (let i = 0; i < data.length; i++) {
        result = operation(result, data[i]);
    }
    
    return result;
};

module.exports = reduce;