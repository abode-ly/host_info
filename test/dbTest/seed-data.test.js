const getRandomInt = require('../../db/seed-data.js');


test('The typeof generate number should be a Number', sumNum);

function sumNum() {
    expect(typeof(getRandomInt(1,3))).toBe('number'); 
}
