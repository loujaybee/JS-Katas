const map = require('./1-implementMap-answer');

describe('Implement .Map', () => {
    
    test('Maps an array', () => {
        const result = map([{ age: 12}], item => ({ ...item, age: item.age + 1}));
        expect(result).toEqual([ { age: 13 }]);
    });
    
});