const { where } = require('sequelize');
const config = require('../config/config.json');

class Crudrepositary {
    constructor(model) {
        this.model = model ;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the Crud Repo : create');
            throw error;
        }
    }
    async destroy(data) {
        try{
            const response = await this.model.destroy({
                where: {
                    id : data
                }
            });
            return response;
        }catch(error) {
            Logger.error('something went wrong in the Crud Repo :destroy');
            throw error;
        }
    }
    async get(data) {
        try{
            const response = await this.model.findByPk(data);
            return response;
        }catch(error) {
            Logger.error('something went wrong in the Crud Repo :destroy');
            throw error;
        }
    }
    async getAll() {
        try{
            const response = await this.model.findAll(data);
            return response;
        }catch(error) {
            Logger.error('something went wrong in the Crud Repo :destroy');
            throw error;
        }
    }
    async update(id,data) { //data is obj ---> {col,value,.....}
        try{
            const response = await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return response;
        }catch(error) {
            Logger.error('something went wrong in the Crud Repo :destroy');
            throw error;
        }
    }
}

module.exports = Crudrepositary ;