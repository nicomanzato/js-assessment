exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    // FROM ANSWERS
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    let base = 1;
    let num = 0;
    for(let i = str.length -1; i >= 0; i--) {
      if (str[i] === '1') { num = num + base; }
      base = base * 2;
    }
    return num;
  },

  convertToBinary: function(num) {
    let base = 1;
    let base2 = '';
    let digit;

    while(num > 0) {
      digit = ((num % 2) === 0 ? '0' : '1');
      num = Math.floor(num/2);
      base2 = digit.concat(base2);
    }

    while(base2.length < 8) base2 = '0'.concat(base2);

    return base2;
  },

  multiply: function(a, b) {
  }
};
