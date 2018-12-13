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

  },

  reverseString: function(str) {
    let reversedString = '';
    for(let i = str.length-1; i >= 0 ; i--) {
      reversedString = reversedString + str[i];
    }
    return reversedString;
  }
};
