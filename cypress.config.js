const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    }
  }
});
