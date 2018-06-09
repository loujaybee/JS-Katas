const map = require('./1-implementMap-answer');

describe('Implement .Map', () => {
    
    test('Maps an array', () => {
        const result = map([{ age: 12}], item => ({ ...item, age: item.age + 1}));
        expect(result).toEqual([ { age: 13 }]);
    });

    test('Do not mutate original array', () => {
        const original = [{ age: 12}];
        const result = map(original, item => ({ ...item, age: item.age + 1}));
        
        expect(original).toEqual([ { age: 12 }]);
        expect(result).toEqual([ { age: 13 }]); 
    });

    test('Pass string as second argument', () => {
        const result = map([{ age: 12 }], 'age');
        expect(result).toEqual([ 12 ]);
    });

});