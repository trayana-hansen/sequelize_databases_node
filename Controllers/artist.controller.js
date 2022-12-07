import ArtistModel from '../Models/artist.model.js'


class ArtistController {
	list = async  (req, res) => {
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

}

export default ArtistController
