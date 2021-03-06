// File: chapter14/protractor.conf.js
exports.config  =  { // The address of a running Selenium server
  seleniumAddress :  'http://localhost:4444/wd/hub' ,
  // The URL where the server we are testing is running
  baseUrl :  'http://localhost:8000/' , // Capabilities to be passed to the WebDriver instance
  capabilities: {
   'browserName': 'chrome',
   chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=800x600" ]
   }
},
  // Spec patterns are relative to the location of the
  // spec file. They may include glob patterns.
  specs: ['tests/e2e/*Spec*.js'], // Options to be passed to Jasmine-node
  jasmineNodeOpts :  { showColors :  true
    // Use colors in the command-line report
  }
};
