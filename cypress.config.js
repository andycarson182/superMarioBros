const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 60000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  chromeWebSecurity: false,
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 2,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
