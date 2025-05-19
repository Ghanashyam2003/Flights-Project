const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/comman');

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {

    ErrorResponse.message = "Something went to wrong while creating airplane";
    ErrorResponse.error = "Model number not found"
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }



  next();
}

module.exports = {
  validateCreateRequest
};
