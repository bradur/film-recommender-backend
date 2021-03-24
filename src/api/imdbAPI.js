import mockIMDBData from "../data/mockIMDBData.js"

class IMDBApi {
  _processRecommendationOptions(options) {
    return Object.assign(
      {
        genres: [],
      },
      options
    )
  }

  _getRecommendations(processedOptions) {
    const data = mockIMDBData
    const { genres } = processedOptions
    const films = data.films.filter((film) =>
      genres.some((genre) => film.genres.includes(genre))
    )
    return films
  }

  async getRecommendations(options) {
    const processedOptions = this._processRecommendationOptions(options)
    const context = this
    return await new Promise((resolve, reject) => {
      resolve(context._getRecommendations(processedOptions))
    })
  }
}

export default IMDBApi
