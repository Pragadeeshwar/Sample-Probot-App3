const { Probot, createProbot } = require("probot");
const { createMyMiddleware } = require("my-probot-middleware")
const app = require('./index.js');

module.exports = createMyMiddleware(app, {
	probot: createProbot(),
});
