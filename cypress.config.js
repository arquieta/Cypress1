const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1agz44",
  e2e: {
    baseUrl: "https://www.liverpool.com.mx/tienda/home",
    "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
  
});
