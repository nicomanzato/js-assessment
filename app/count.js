exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  // FROM ANSWERS-ISH
  count: function (start, end) {
    let count = 0;
    const run = () => {
      console.log(start + count++);

      if (start + count <= end) {
        timeout = setTimeout(run, 100);
      }
    }

    run();

    return {
      cancel: () => timeout && clearTimeout(timeout),
    }
  }
};
