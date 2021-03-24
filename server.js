import express from "express"
import cors from 'cors'
import routes from './src/routes/index.js'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv))
  .option('port', {
    alias: 'p',
    description: 'Express server port',
    type: 'number'
  }).argv
const port = argv.port ? argv.port : 80

const app = express()
app.use(cors())

app.use('/api', routes())
app.listen(port)
