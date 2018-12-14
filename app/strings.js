exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let reducedString = '';
    for(let i = 0; i < str.length; i++) {
      let repeatQuantity = 0;
      for(let j = i - amount; j < i; j++) {
        if (str[j] === str[i]) {
          repeatQuantity++;
        }
        if ((j>0) && (str[j] !== str[j-1])) repeatQuantity = 1;
      }
      if (repeatQuantity < amount) {
        reducedString = reducedString + str[i];
      }
    }

    return reducedString;
  },

  wordWrap: function(str, cols) {
/*
    let cantCols = 0;
    let result = '';
    for(let i = 0; i < str.length; i++){
      if ((cantCols >= cols) && (str[i] === ' ')) {
        result = result + '\n';
        cantCols = 0;
      } else {
        result = result + str[i];
      }

      cantCols++;
    }
    return result;
*/

    let words = str.split(' ');
    let result = '';
    let cantCols = 0;
    let word;
    let lineWraper;

    for(let wordIndex in words) {
      word = words[wordIndex];
      cantCols += word.length;
      lineWraper = ' ';
      if (wordIndex == 0) {
        lineWraper = '';
      } else if (cantCols > cols) {
        lineWraper = '\n';
        cantCols = word.length;
      } else lineWraper = ' ';
      result = result + lineWraper + word;
    }
    return result;

  },

  reverseString: function(str) {
    let reversedString = '';
    for(let i = str.length-1; i >= 0; i--) {
      reversedString = reversedString + str[i];
    }
    return reversedString;
  }
};
