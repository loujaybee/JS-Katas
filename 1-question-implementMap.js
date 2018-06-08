
/* 

    Implement a map function for an array, similar to the .map property found in core JS.

*/


/* 
    Parameter 1) Data is passed as an array
    Parameter 2) A callback that implements the 
*/ 
var map = function(data, func){
    // Your code here
};

const callback = person => { person.age++; return person; }

console.log(map([ { age: 12 }, { age: 20 } ], callback));

/* 

    Expected result: 

    [{
        age: 13
    }, {
        age: 21
    }]

*/ 