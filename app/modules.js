exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    const aModule = {
      greeting: str1,
      name: str2,
      sayIt: () => `${aModule.greeting}, ${aModule.name}`,
    }
    return aModule;
  }
};
