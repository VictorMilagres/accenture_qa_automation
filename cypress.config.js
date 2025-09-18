const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // define the viewport size
  viewportWidth: 1920,
  viewportHeight:1080,

  // define if a video is going to be recorded when the test fails
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
      homol: {
        api_account: "https://demoqa.com/Account/v1",
        api_bookstore: "https://demoqa.com/BookStore/v1",
        demoqa: "https://demoqa.com/"
      },
      prod: {
        api_account: "https://demoqa.com/Account/v1",
        api_bookstore: "https://demoqa.com/BookStore/v1",
        demoqa: "https://demoqa.com/"
      }
    }
  },
});
