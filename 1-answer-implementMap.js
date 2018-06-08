
const map = function(data, func){
    
    const dataCopy = [...data];

    for (let i = 0; i < data.length; i++) {
        dataCopy[i] = func(dataCopy[i], i, dataCopy);
    }

    return dataCopy;
};

const callback = person => ({  
    ...person,
    age: person.age + 1
});

console.log(map([ { age: 12 }, { age: 20 } ], callback));
