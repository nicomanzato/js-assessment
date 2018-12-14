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
    // https://www.geeksforgeeks.org/heaps-algorithm-for-generating-permutations/

    const swap = (elem1, elem2) => {
      var aux = elem1;
      elem1 = elem2;
      elem2 = aux;
    }

    let newArr = [];

    const permutation = (arr, n) => {

      if (n === 1) {
        return newArr.push(arr.slice());
      }

      for(let i = 0; i < n; i++){
        permutation(arr, n-1);
        if ((n % 2) === 1){
          let aux = arr[0];
          arr[0] = arr[n-1];
          arr[n-1] = aux;
        } else {
          let aux = arr[i];
          arr[i] = arr[n-1];
          arr[n-1] = aux;
        }
      }
    }

    permutation(arr,arr.length);
    return newArr;
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
    //https://www.programcreek.com/2014/01/leetcode-generate-parentheses-java/

    let newArr = [];

    const generateParenthesis = (arr, s, left, right) => {
      if (left > right)
        return;
      if (left === 0 && right === 0) {
        arr.push(s);
        return;
      }
      if (left > 0) {
        generateParenthesis(arr, s+'(', left -1, right);
      }
      if (right > 0) {
        generateParenthesis(arr, s+')', left, right -1);
      }
    }

    generateParenthesis(newArr, '', n, n);
    return newArr;

  }
};
