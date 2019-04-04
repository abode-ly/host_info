const generateHostInfo = require('../../db/hostInfo.js');


test('generate number should be between 1 and 9', generateRandom);

function generateRandom() {
    expect(typeof(generateHostInfo())).toBe('object'); 
}
