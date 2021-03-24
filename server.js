import express from "express"
import cors from 'cors'
import routes from './src/routes/index.js'

const port = 80

const app = express()
app.use(cors())

app.use('/api', routes())
app.listen(process.env.PORT || port)
