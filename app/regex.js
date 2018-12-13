exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /[0-9]/.test(str);
  },

  containsRepeatingLetter: function(str) {
    //FROM ANSWERS
    return (/([A-Za-z])\1/).test(str);
  },

  endsWithVowel: function(str) {
    return /[.|s]*[aeiouAEIOU]$/.test(str);
  },

  captureThreeNumbers: function(str) {
    let num = /\d\d\d/.exec(str);
    if (num)
      return num[0];
    return false;
  },

  matchesPattern: function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },

  isUSD: function(str) {
    return /^\$\d{1,3}(,\d{3})*(\.\d{2}){0,1}$/.test(str);
  }
};
