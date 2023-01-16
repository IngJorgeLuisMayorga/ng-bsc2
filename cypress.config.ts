import { defineConfig } from "cypress";
import { lighthouse, prepareAudit } from "@cypress-audit/lighthouse";
import { pa11y } from "@cypress-audit/pa11y";

const fs = require("fs");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse((lighthouseReport: any) => {
          fs.writeFile("cypress/audits/lighthouse.json", lighthouseReport.report, (error: any) => {
            error ? console.log(error) : console.log("Report created successfully");
          });
        }),
        pa11y: pa11y(),
      });
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});


