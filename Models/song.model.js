import sequelize  from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class SongModel extends Model{}
SongModel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'Ikke navngivet'
	},
	lastname: {
			type: DataTypes.STRING,
			allowNull: false
	},
	content: {
		type: DataTypes.STRING,
		allowNull: false
	},
	artist_id: {
		type: DataTypes.BIGINT,
		allowNull: false,
		foreignKey: true
	}
}, {
	sequelize,
	modelName: 'song',
	freezeTableName: true,
	underscored: true
})



export default SongModel
