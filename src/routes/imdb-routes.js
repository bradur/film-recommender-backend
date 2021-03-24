import IMDBApi from '../api/imdbAPI.js'

import express from 'express'

const router = express.Router()
const imdbAPI = new IMDBApi()

export default (app) => {
  app.use('/imdb/recommendations-by-genre/', router)
  router.get('/:genres', (req, res)  => {
    const genres = req.params.genres.split(',')

    const getRecommendationsAndSend = async () => {
      const recommendations = await imdbAPI.getRecommendations({genres})
      res.send(recommendations)
    }
    getRecommendationsAndSend()
  })
  return router
}