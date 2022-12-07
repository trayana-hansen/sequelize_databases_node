import express from 'express'
import ArtistController from '../Controllers/artist.controller.js'
const ArtistRouter = express.Router()
const controller = new ArtistController

ArtistRouter.get('/artist', (req, res) => {
	controller.list(req, res)
})
ArtistRouter.get('/artist/:id([0-9]*)', (req, res) => {
	controller.details(req, res)
})
ArtistRouter.post('/artist/:id([0-9]*)', (req, res) => {
	controller.create(req, res)
})
ArtistRouter.put('/artist/:id([0-9]*)', (req, res) => {
	controller.update(req, res)
})
ArtistRouter.delete('/artist/:id([0-9]*)', (req, res) => {
	controller.delete(req, res)
})
export default ArtistRouter
