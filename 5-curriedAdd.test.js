const add = require('./5-curriedAdd-answer');

describe('Implement .subscribe .publish', () => {

    test('Adds with 2 params', () => {
        const result = add(2)(3)

        expect(result).toEqual(6);
    });

});