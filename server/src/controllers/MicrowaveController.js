const { Microwave } = require('../models')

module.exports = {

    // Get all microwave
    async index(req, res) {
        try {
            const microwave = await Microwave.findAll()
            res.send(microwave)
        } catch (err) {
            res.status(500).send({
                error: 'The microwave information was incorrect'
            })
        }
    },


    // Create microwave
async create(req, res) {
    try {
        const microwave = await Microwave.create(req.body);
        res.status(200).send(microwave);
    } catch (err) {
        console.error(err);
        res.status(400).send({
            error: 'Create microwave failed'
        })
    }
},


    // Edit microwave
async put(req, res) {
    try {
        await Microwave.update(req.body, {
            where: {
                id: req.params.microwaveId
            }
        });
        const updatedMicrowave = await Microwave.findByPk(req.params.microwaveId);
        res.status(200).send(updatedMicrowave);
    } catch (err) {
        console.error(err);
        res.status(400).send({
            error: 'Update microwave failed'
        })
    }
},

    
    // Delete microwave
async remove(req, res) {
    try {
        const microwave = await Microwave.findOne({
            where: {
                id: req.params.microwaveId
            }
        });
        if (!microwave) {
            return res.status(404).send({
                error: 'Microwave not found'
            });
        }
        await microwave.destroy();
        res.status(200).send(microwave);
    } catch (err) {
        console.error(err);
        res.status(500).send({
            error: 'Delete microwave failed'
        })
    }
},


    // Show user by id
    async show(req, res) {
        try {
            const microwave = await Microwave.findByPk(req.params.microwaveId)
            res.send(microwave)
        } catch (err) {
            res.status(500).send({
                error: 'The microwave information was incorrect'
            })
        }
    }
}


