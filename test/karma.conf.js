module.exports = function(config){
  config.set({

    basePath : '../app',

    files : [
      'lib/angular/angular.js',
      'lib/angular/angular-*.js',
      '../test/lib/angular-mocks.js',
      '../test/lib/sinon-1.15.0.js',
      'js/**/*.js',
      '../test/unit/**/*.js'
    ],

    autoWatch : false,

    singleRun: true,

    frameworks: ['jasmine'],

    browsers : ['ChromeHeadless'],

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
