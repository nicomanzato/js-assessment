exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) {
    var sum = 0;

    for(i = 0; i < arr.length; i++) {
      sum = arr[i] + sum;
    }

    return sum;
  },

  remove: function(arr, item) {
    var newArr = [];
    for(i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    i = 0;
    for(i = 0; i< arr.length; i++ ){
      if (arr[i] === item){
        for(j = i; j< arr.length; j++){
          arr[j] = arr[j+1];
        }
        i--;
        arr.length--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function(arr) {
    arr.length--;
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    for(i = 0; i< arr2.length; i++ ){
      arr1.push(arr2[i]);
    }

    return arr1;
  },

  insert: function(arr, item, index) {
    newArr = [];
    for(i = 0; i < arr.length; i++){
      if (index === i) newArr.push(item);
      newArr.push(arr[i]);
    }
    return newArr;
  },

  count: function(arr, item) {
    var count = 0;
    for(i = 0; i < arr.length; i++){
      if (arr[i] === item) count++;
    }
    return count;
  },

  duplicates: function(arr) {
    newArr = [];
    for(i = 0; i < arr.length; i++){
      for(j = i+1; j < arr.length; j++){
        if ((arr[i] === arr[j]) && !newArr.includes(arr[i])) newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  square: function(arr) {
    for(i = 0; i < arr.length; i++){
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    newArr = [];
    for(i = 0; i < arr.length; i++){
      if (target === arr[i]) newArr.push(i);
    }
    return newArr;
  }
};
