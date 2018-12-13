exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    /*
    let promise = fetch(url)
                    .then(resp => resp.json())
                    .then(data => data.sort());
    return promise;
    */
  }
};
