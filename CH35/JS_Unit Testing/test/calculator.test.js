
const calculator = require('../modules/calculador.js');

//Primer test para la suma
test('la suma de dos números y el vaor resultado', ()=>{
    expect(calculator.sum(10, 20)).toBe(30)
});

//Segundo test para la suma
test('la resta de dos números y el vaor resultado', ()=>{
    expect(calculator.substract(10, 20)).toBe(-10)
});