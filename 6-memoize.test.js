const memoize = require('./6-memoize-answer');

describe('Implement .memoize ', () => {

    test('Doesnt call function second time', () => {
        const add = (first, second) => first + second;
        const added = memoize(add)(2, 3);
        expect(added).toEqual(5);

        const mockAdd = jest.fn().mockReturnValue(5);;
        const memoizedAdd = memoize(mockAdd)(2, 3);
        
        expect(memoizedAdd).toEqual(5);
        expect(mockAdd).toHaveBeenCalledTimes(0);
    });

});