exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    let fileList = [];

    const recursiveListFiles = (data, dirName, directoryRoute = []) => {
      for(let i = 0; i < data.files.length; i++){
        let elem = data.files[i];
        if (typeof elem !== 'string'){
          directoryRoute.push(elem.dir);
          recursiveListFiles(elem, dirName, directoryRoute);
          directoryRoute.pop();
        } else {
          if (((dirName) && (directoryRoute.indexOf(dirName) > -1 )) || (!dirName))
            fileList.push(elem);
        }
      }
    }

    recursiveListFiles(data, dirName);
    return fileList;
  },

  permute: function(arr) {
  },

  fibonacci: function(n) {
    const fib = (num, previousNum1 = 1, previusNum2 = 1, depth = 3) => {
      if ((num === 1) || (num === 2)) {
        return 1;
      }
      if (depth === num) {
        return previousNum1 + previusNum2;
      }
      return fib(num, previousNum1+previusNum2, previousNum1, depth +1);
    }

    return fib(n);
  },

  validParentheses: function(n) {

  }
};
