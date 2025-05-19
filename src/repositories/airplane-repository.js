const Crudrepositary = require("./crud-repository");
const { Airplane } = require("../models");
const { Model } = require("sequelize");

class AirplaneRepository extends Crudrepositary {
  constructor() {
    super(Airplane);
  }
}

module.exports = AirplaneRepository;
