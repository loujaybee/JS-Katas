const reduce = require('./3-implementReduce-answer');

describe('Implement .Reduce', () => {
    
    test('Reduces an array without default', () => {
        const result = reduce([{ age: 12}, { age: 13 }], (prev, item) => { prev = prev + item.age; return prev;});
        expect(result).toEqual(25);
    });

    test('Reduces an array, starting with 10', () => {
        const result = reduce([{ age: 12}, { age: 13 }], (prev, item) => { prev = prev + item.age; return prev;}, 10);
        expect(result).toEqual(35);
    });

    test('Does not mutate original array', () => {
        const original = [{ age: 12}, { age: 13 }];
        const start = 0;
        const result = reduce(original, (prev, item) => { prev = prev + item.age; return prev;}, start);
        
        expect(original).toEqual([ { age: 12 }, { age: 13 }]);
        expect(result).toEqual(25);
        expect(start).toEqual(0);
    });

});