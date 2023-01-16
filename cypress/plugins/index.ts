const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");
const fs = require("fs");

module.exports = (on: any, config: any) => {
  on("before:browser:launch", (browser = {}, launchOptions: any) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse: lighthouse((lighthouseReport: any) => {
      fs.writeFile("lighthouse.json", lighthouseReport.report, (error: any) => {
        error ? console.log(error) : console.log("Report created successfully");
      });
    })
  });
};