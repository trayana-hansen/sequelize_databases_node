import sequelize from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class ArtistModel extends Model{}
ArtistModel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'Ikke navngivet'
	}

	},
{
	sequelize,
	modelName: 'artist',
	freezeTableName: true,
	underscored: true
})



export default ArtistModel
