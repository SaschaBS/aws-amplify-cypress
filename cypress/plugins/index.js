const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor");
const registerCodeCoverageTasks = require("@cypress/code-coverage/task");

module.exports = (on, config) => {
  registerCodeCoverageTasks(on, config);
  on("file:preprocessor", cypressTypeScriptPreprocessor);
  return config;
};
