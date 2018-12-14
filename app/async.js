exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {

    const getNameFromPeople = (people) => {
      let newArr = [];
      for(person in people){
        newArr.push(people[person].name);
      }
      return newArr;
    }

    let promise = fetch(url)
                    .then(resp => resp.json())
                    .then(data => { return getNameFromPeople(data.people).sort(); });

    return promise;

  }
};
