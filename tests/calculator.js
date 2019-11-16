const chai = require('chai');
const calculator = require('../assets/js/calculator');

const assert = chai.assert;

describe('TDD de Operações da Calculadora', () => {
  it('Test: Deve somar 2 Números', () => {
    calculator(false, {
      currOperator: '+',
      pastNumber: '5',
      currNumber: '5'
    })
    assert.equal(calculator.calculate(), 10);
  });

  it('Test: Deve subtrair 2 números', () => {
    calculator(false, {
      currOperator: '-',
      pastNumber: '25',
      currNumber: '15'
    })
    assert.equal(calculator.calculate(), 10);
  })

  it('Test: Deve multiplicar 2 números', () => {
    calculator(false, {
      currOperator: '*',
      pastNumber: '5',
      currNumber: '5'
    })
    assert.equal(calculator.calculate(), 25);
  })

  it('Test: Deve dividir 2 números', () => {
    calculator(false, {
      currOperator: '/',
      pastNumber: '100',
      currNumber: '4'
    })
    assert.equal(calculator.calculate(), 25)
  })

  it('Test: Deve obter resultado com duas casas decimais', () => {
    calculator(false, {
      currOperator: '/',
      pastNumber: '5',
      currNumber: '100'
    })
    assert.equal(calculator.calculate(), 0.05)
  })

  it('Test: Deve obter resultado nagativo', () => {
    calculator(false, {
      currOperator: '-',
      pastNumber: '10',
      currNumber: '100'
    })
  })
});