const createError = require("create-error");

module.exports = {
	AuthenticationError: createError("AuthenticationError", {isCustomError: true, status: 401}),
	ValidationError: createError("ValidationError", {isCustomError: true, status: 422})
};