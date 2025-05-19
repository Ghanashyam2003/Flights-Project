const { Model } = require('sequelize');
const { AirplaneService } = require('../services');

const { SuccessResponse,ErrorResponse } = require('../utils/comman');
const { StatusCodes } = require('http-status-codes');
async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      ModelNumber: req.body.ModelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error ;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane
};
