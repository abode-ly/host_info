const sum = require('../../db/hostInfo.js');

test('generate number should be between 1 and 9', getRandomIntTest);

function getRandomIntTest() {
    expect(sum(1, 1)).toBe(2); 
}