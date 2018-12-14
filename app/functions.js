exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1]);
  },

  speak: function(fn, obj) {
    obj.speak = fn;
    return obj.speak();
  },

  functionFunction: function(str) {
    return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures: function(arr, fn) {
    for(let i = 0; i < arr.length; i++){
      arr[i] = () => fn(arr[i]);
    }

    return arr;
  },

  partial: function(fn, str1, str2) {
    return (str) => {
      return fn(str1, str2, str);
    }
  },

  useArguments: function() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
      sum = arguments[i] + sum;
    }

    return sum;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);  // ????????????????????
    // fn(args)????????
  },

  partialUsingArguments: function(fn) {
    var initialArguments = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      let combinedArguments = initialArguments.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, combinedArguments);
    };
  },

  curryIt: function(fn) {
    return x => y => z => fn(x,y,z);
  }
};
