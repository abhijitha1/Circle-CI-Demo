import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on("file:preprocessor", cucumber());
    },
    specPattern: [
     
      "cypress/Tests/Basic.ts",
      "cypress/Tests/checkOut.ts",
      "cypress/Tests/API Tests/getPlace.ts",
      "cypress/Tests/API Tests/addPlace.ts",
      "cypress/Tests/API Tests/deletePlace.ts",
      "cypress/Tests/API Tests/updatePlace.ts",
      "cypress/Tests/API Tests/addTourist.ts",
      "cypress/Tests/API Tests/queryParams.ts",
      "cypress/Tests/API Tests/headerAuth.ts",
      "cypress/Tests/API Tests/parsingJsonResponse.ts",
      "cypress/Tests/API Tests/bearerAuth.ts",
      "cypress/Tests/API Tests/digestAuth.ts",
      "cypress/Tests/API Tests/basicAuth.ts",
      "cypress/Tests/API Tests/APIKeyAuth.ts"

    ],
  },
});
