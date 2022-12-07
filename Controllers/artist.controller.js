import ArtistModel from '../Models/artist.model.js'


class ArtistController {
	list = async (req, res) => {
		console.log(req.query);
		let { limit, attributes } = req.query
		limit = parseInt(limit) || 1000
		const attr = attributes ? attributes.split(',') : new Array('id', 'name')
		console.log(attr);


		const result = await ArtistModel.findAll({
			attributes: attr,
			limit: limit
		})
		res.json(result)
	}

	details = async (req, res) => {
		const { id } = req.params || 0
		const result = await ArtistModel.findOne({
			attributes: ['id', 'name'],
			where: { id: id }
		})
		res.json(result)
	}
	create = async (req, res) => {
		const { name }  = req.body;
		if(name) {
		const model = await ArtistModel.create(req.body)
		res.json({ newId: model.id })
			} else {
				res.sendStatus(418)
			}
	}
	update = async (req, res) => {
		const { id } = req.params || 0
        const { name } = req.body;

        if(id && name) {
            const model = await ArtistModel.update(req.body, { where: { id: id },
		})
            res.json({
				msg: 'Artist updated'
			})
        } else {
            res.sendStatus(418)
        }
    }
	delete = async (req, res) => {
        try {
            await ArtistModel.destroy({ where: { id: req.params.id }});
            res.sendStatus(200)
        }
        catch(err) {
            res.send(err)
        }
    }


}


export default ArtistController
