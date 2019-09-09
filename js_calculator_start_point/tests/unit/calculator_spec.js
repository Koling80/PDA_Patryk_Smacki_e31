var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('can add any numbers', function() {
    calculator.previousTotal = 6;
    calculator.add(4)
    assert.equal(10, calculator.runningTotal)
  })

  it('can subtract numbers', function() {
    calculator.previousTotal = 8;
    calculator.subtract(4)
    assert.equal(4, calculator.runningTotal)
  })

  it('can multiply numbers', function() {
    calculator.previousTotal = 7;
    calculator.multiply(5)
    assert.equal(35, calculator.runningTotal)
  })

  it('can divide numbers', function() {
    calculator.previousTotal = 15;
    calculator.divide(3);
    assert.equal(5, calculator.runningTotal)
  })


//integration

  it("should concatenate concatenate number button clicks", function(){
    calculator.numberClick(1)
    calculator.numberClick(2)
    assert.strictEqual(12, calculator.runningTotal)
  })

  it('can chain multiple operations', function(){
   calculator.numberClick(1);
   calculator.operatorClick("+");
   calculator.numberClick(4);
   calculator.operatorClick("+")
   calculator.numberClick(1);
   calculator.operatorClick("/")
   calculator.numberClick(3);
   calculator.operatorClick("=");
   assert.equal(2, calculator.runningTotal)
  })

  it('it can subtract numbers', function(){
   calculator.numberClick(7);
   calculator.operatorClick("-");
   calculator.numberClick(4);
   calculator.operatorClick("=");
   assert.equal(3, calculator.runningTotal)
  })

  it('it can multiply numbers', function(){
   calculator.numberClick(5);
   calculator.operatorClick("*");
   calculator.numberClick(3);
   calculator.operatorClick("=");
   assert.equal(15, calculator.runningTotal)
  })

  it('it can divide numbers', function(){
   calculator.numberClick(21);
   calculator.operatorClick("/");
   calculator.numberClick(7);
   calculator.operatorClick("=");
   assert.equal(3, calculator.runningTotal)
  })


  it('should clear numbers without affecting the calculation', function() {
    calculator.numberClick(2);
    calculator.operatorClick("+")
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick("=")
    assert.equal(6, calculator.runningTotal)
  })
