// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import './commands'

const istanbul = require("istanbul-lib-coverage");
const map = istanbul.createCoverageMap();

/* Cypress.on("window:before:unload", (e) => {
  const coverage = e.currentTarget.__coverage__;
  if (coverage) map.merge(coverage);
}); */

after(() => {
  cy.window().then((win) => {
    const targetWin = win.parent.document.getElementsByClassName("spec-iframe")[0].contentWindow;
    if (targetWin && targetWin.__coverage__) map.merge(targetWin.__coverage__);

    cy.writeFile(".nyc_output/out.json", JSON.stringify(map));
    // cy.exec("nyc report --reporter=html --reporter=text-lcov | codacy-coverage --token 3fe24bf06bd34a84bc609d84eed62eb5 --commit 262c2b9");
  });
});
Cypress.Commands.add("getScript", (dependencyList, callback) => {
  callback();
});
// Alternatively you can use CommonJS syntax:
// require('./commands')
// require("../../Bundles/Core.js");
// require("../../Bundles/Collections.js");