var HtmlReporter = require('protractor-jasmine2-html-reporter');
var JunitReporter = require('jasmine-reporters');

var htmlReporter = new HtmlReporter({
    cleanDestination: false,
    savePath: './test/reports/',
    screenshotsFolder: 'images',
    filePrefix: 'index',
    takeScreenshots: true,
    takeScreenshotsOnlyOnFailures: true,
    consolidate: true,
    consolidateAll: true

});
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  suites: {
    home: '../test/greeting.js',
    other: ['../test/spec.js']
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  },

  onPrepare: function(){
    jasmine.getEnv().addReporter(htmlReporter);

    jasmine.getEnv().addReporter(new JunitReporter.JUnitXmlReporter({
          consolidateAll: true,
              savePath: "./test/reports"
      }));
  }
};  