import express from 'express';
import dotenv from 'dotenv';
import SongRouter from './Routes/song.router.js'
import ArtistRouter from './Routes/artist.router.js'


dotenv.config();
const port = process.env.PORT || 4200


const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(SongRouter)
app.use(ArtistRouter)


app.listen(port, () => {
	console.log(`Webserver running on http://localhost:${port}`);
})
