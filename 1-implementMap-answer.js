
const map = function(data, operation){
    
    const dataCopy = [...data];

    for (let i = 0; i < data.length; i++) {
        if(typeof operation === "string") {
            dataCopy[i] = dataCopy[i][operation]
        } else {
            dataCopy[i] = operation(dataCopy[i], i, dataCopy);
        }
    }

    return dataCopy;
};

module.exports = map;