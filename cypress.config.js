const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7a1cz7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
