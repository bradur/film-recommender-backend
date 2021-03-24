import express from 'express'
import genres from '../data/mockGenreData.js'

const router = express.Router()

export default (app) => {
  app.use('/genres', router)
  router.get('/', (req, res) => {
    res.send(genres)
  })
  return router
}
