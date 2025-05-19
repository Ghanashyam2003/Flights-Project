const { Model } = require('sequelize');
const { AirplaneService } = require('../services');

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      ModelNumber: req.body.ModelNumber,
      capacity: req.body.capacity,
    });
    return res.status(201).json({
      success: true,
      data: airplane,
      message: "Airplane created successfully",
      err: {}
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: error
    });
  }
}

module.exports = {
  createAirplane
};
