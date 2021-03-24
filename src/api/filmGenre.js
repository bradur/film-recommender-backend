class FilmGenre {
  constructor(options) {
    const {
      name
    } = options
    this.name = name
    this.alternativeSpellings = alternativeSpellings
  }

  hasAlternativeSpelling(spelling) {
    return this.alternativeSpellings.includes(spelling.toLowerCase())
  }

  getSpellingForAPI() {

  }
}

export default FilmGenre