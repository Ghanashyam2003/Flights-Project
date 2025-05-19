const { StatusCodes } = require('http-status-codes');

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({
        success: false,
        message: "modelNumber is required",
        data: {},
        err: { explanation: "modelNumber is required" }
      });
  }

  // Optional: Add more validations if needed, e.g., for `capacity`

  next();
}

module.exports = {
  validateCreateRequest
};
