const { Probot, createProbot } = require("probot");
const { createMyMiddleware } = require("my-probot-middleware")
const app = require('./index');

module.exports = createMyMiddleware(app, {
	probot: createProbot(),
});
