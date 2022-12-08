import SongModel from '../Models/song.model.js'
import ArtistModel from '../Models/artist.model.js'

ArtistModel.hasMany(SongModel)
SongModel.belongsTo(ArtistModel)

class SongController {

	list = async (req, res) => {
		console.log(req.query);
		let { limit, attributes } = req.query
		limit = parseInt(limit) || 1000
		const attr = attributes ? attributes.split(',') : new Array('id', 'title', 'content', 'artist_id')
		console.log(attr);


		const result = await SongModel.findAll({
			attributes: attr,
			limit: limit
				})
			res.json(result)
		}

	details = async (req, res) => {
			const { id } = req.params || 0
			const result = await SongModel.findOne({
				attributes: ['id', 'title', 'content', 'artist_id'],
				where: { id: id }
			})
			res.json(result)
		}
	create = async (req, res) => {
			const { title, content, artist_id }  = req.body;
			if(title && content && artist_id) {
			const model = await SongModel.create(req.body)
			res.json({ newId: model.id })
				} else {
					res.sendStatus(418)
				}

		}
	update = async (req, res) => {
			const { id } = req.params || 0
			const { title, content, artist_id } = req.body;

			if(id && title && content && artist_id) {
				const model = await SongModel.update(req.body, { where: { id: id },
			})
				res.json({
					msg: 'Song updated'
				})
			} else {
				res.sendStatus(418)
			}
		}
	delete = async (req, res) => {
			try {
				await SongModel.destroy({ where: { id: req.params.id }});
				res.sendStatus(200)
			}
			catch(err) {
				res.send(err)
			}
		}


}

export default SongController
