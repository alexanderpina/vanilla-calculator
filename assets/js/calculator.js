// El
const $ = (selector) => {
  if (!selector.trim()) return;
  let n = document.querySelectorAll(selector);
  if (n.length === 1) {
    return n[0];
  }
  return n;
}

const calculator = (selector, options) => {
  _this = calculator;
  _this.$ = {};

  /* ------------------------------
     > Defaults
  ------------------------------ */ 
  if (selector) {
    _this.$ = {
      viewer:   $(`${selector} .display`),
      number:   $(`${selector} .number`),
      clear:    $(`${selector} [data-cl]`),
      operator: $(`${selector} [data-op]`),
      digit:    $(`${selector} [data-dg]`),
      result:   $(`${selector} [data-rs]`),
      calc: '', // Calcule
      currNumber: '', // Current number
      pastNumber: '', // Past number
      currOperator: '', // Current operator
    }
  }

  if (options) {
    Object.assign(_this.$, options);
  }

  /* ------------------------------
     > Methods
  ------------------------------ */ 
  _this.setOptions = (options) => {
    Object.assign(_this.$, options);
  }
  
  _this.getOptions = () => {
    return _this.$;
  }
  
  _this.setDisplay = (n) => {
    _this.$.viewer.innerHTML = n;
  }

  _this.clear = () => {
    _this.$.currNumber = '';
    _this.$.pastNumber = '';
    _this.setDisplay('0');
  }

  _this.setResult = () => { 
    let r = _this.calculate();
    _this.setDisplay(r);
    _this.$.currNumber = '';
    _this.$.pastNumber = r;
  }

  _this.calculate = () => {
    let r = `${_this.$.pastNumber}${_this.$.currOperator}${_this.$.currNumber}`;
    return eval(r);
  }

  _this.addDigit = (n) => {
    _this.$.currNumber = `${_this.$.currNumber}${n}`;
    _this.setDisplay(_this.$.currNumber);
  }

  _this.operation = (n) => {
    let currNumber = _this.$.currNumber.length !== 0,
        pastNumber = _this.$.pastNumber.length !== 0,
        haveNumbers = currNumber && pastNumber,
        sameOperator = _this.$.currOperator === n;

    // Same operator, show result
    if (haveNumbers && sameOperator) {
      _this.setResult();
    }

    _this.$.currOperator = n;
    if (!pastNumber) {
      _this.$.pastNumber = _this.$.currNumber;
      _this.$.currNumber = '';
    }
  }

  /* ------------------------------
     > Action Buttons
  ------------------------------ */ 
  // Result
  _this.$.result && (
  _this.$.result.onclick = function(e) {
    e.preventDefault();
    _this.setResult();
  })

  // Clear
  _this.$.clear && (
  _this.$.clear.onclick = function(e) {
    e.preventDefault();
    _this.clear();
  })

  // Digit
  _this.$.digit && (
  _this.$.digit.forEach(item => {
    item.onclick = function(e) {
      e.preventDefault();
      _this.addDigit(this.innerText);
    }
  }));

  // Operator
  _this.$.operator && (
  _this.$.operator.forEach(item => {
    item.onclick = function(e) {
      e.preventDefault();
      _this.operation(item.innerText);
    }
  }));
}

// Export fn to the tests
if (typeof module === 'object' && module.exports) {
  module.exports = calculator;
}