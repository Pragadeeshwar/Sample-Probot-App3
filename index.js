const { run } = require('@probot/adapter-github-actions')
const app = require("./app");

const { createProbot } = require('probot');

module.exports = (...handlers) => {
  // Setup Probot app
  const githubToken = process.env.GITHUB_TOKEN;
  const probot = createProbot({ githubToken });
  probot.setup(handlers);

run(app).catch((error) => {
  console.error(error);
  process.exit(1);
});