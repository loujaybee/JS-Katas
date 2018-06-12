const { subscribe, publish } = require('./4-implementPubSub-answer');

describe('Implement .subscribe .publish', () => {
    const mockConsoleLog = jest.fn();
    console.log = mockConsoleLog;

    afterEach(() => {
        mockConsoleLog.mockReset();
    });
    
    test('says hello', () => {

        subscribe('sayHello', ({ name }) => { console.log(`Hello, ${name}`); });
        
        publish('sayHello', { name: 'Lou'});
        publish('sayHello', { name: 'Lorenzoo!'});

        expect(mockConsoleLog).toHaveBeenCalledWith('Hello, Lorenzoo!');
        expect(mockConsoleLog).toHaveBeenCalledWith('Hello, Lou');
    });

});