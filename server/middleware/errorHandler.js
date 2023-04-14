const { StatusCodes } = require("http-status-codes");

// default error handler
const errorHanlder = (err, req, res, next) => {
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later",
  };
};

module.exports = errorHanlder;
