const map = require('./1-implementMap-answer');
const pick = require('./2-implementPick-answer');

describe('Implement .Pick', () => {
    
    test('Picks an object', () => {
        expect(pick({ name: "Lou"}, "name")).toEqual("Lou");
    });

    test('Can use map and pick', () => {
        const data = [{
            name: "Lou"
        }]
        const result = map(data, obj => pick(obj, 'name'));
        expect(result).toEqual(["Lou"])
    });

});