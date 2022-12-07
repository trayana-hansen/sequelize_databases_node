import express from 'express'
import SongController from '../Controllers/song.controller.js'
const SongRouter = express.Router()
const controller = new SongController

SongRouter.get('/song', (req, res) => {
	controller.list(req, res)
})
SongRouter.get('/song/:id([0-9]*)', (req, res) => {
	controller.details(req, res)
})
SongRouter.post('/song/:id([0-9]*)', (req, res) => {
	controller.create(req, res)
})
SongRouter.put('/song/:id([0-9]*)', (req, res) => {
	controller.update(req, res)
})
SongRouter.delete('/song/:id([0-9]*)', (req, res) => {
	controller.delete(req, res)
})
export default SongRouter
