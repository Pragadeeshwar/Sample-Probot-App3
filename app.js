const runProbot = require('@probot/adapter-github-actions');

const app = require('./index');

runProbot(app);
