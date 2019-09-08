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

  it("should add 1 to 4 and get 5", function() {
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.strictEqual(calculator.runningTotal, 5);
  });

  it("should subtract 4 from 7 and get 3", function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  });

  it("should multiply 3 by 5 and get 15", function(){
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.strictEqual(calculator.runningTotal, 15);
  });

  it("should divide 21 by 7 and get 3", function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  });

  it("should concatenate multiple number button clicks", function(){
    calculator.numberClick(1)
    calculator.numberClick(2)
    assert.strictEqual(calculator.runningTotal, 12)
  });

  it('it can add numbers', function(){
   calculator.numberClick(1);
   calculator.operatorClick("+");
   calculator.numberClick(4);
   calculator.operatorClick("=");
   assert.equal(5, calculator.runningTotal)
  });

  it('it can subtract numbers', function(){
   calculator.numberClick(7);
   calculator.operatorClick("-");
   calculator.numberClick(4);
   calculator.operatorClick("=");
   assert.equal(3, calculator.runningTotal)
  });

  it('it can multiply numbers', function(){
   calculator.numberClick(5);
   calculator.operatorClick("*");
   calculator.numberClick(3);
   calculator.operatorClick("=");
   assert.equal(15, calculator.runningTotal)
  });

  it('it can divide numbers', function(){
   calculator.numberClick(21);
   calculator.operatorClick("/");
   calculator.numberClick(7);
   calculator.operatorClick("=");
   assert.equal(3, calculator.runningTotal)
  });


  it('should clear the running total without affecting the calculation', function() {
    calculator.runningTotal = 6;
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
  });

});
