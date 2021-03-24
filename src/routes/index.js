import express from 'express'
import genreAPI from './genre-routes.js'
import imdbAPI from './imdb-routes.js'

export default () => {
  const router = express.Router()
  genreAPI(router)
  imdbAPI(router)

  return router
}