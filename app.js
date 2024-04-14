import express from 'express'
import {productsRoutes} from './routes/productsRoute.js'
import logger from './middlewares/logger.js'
import errorHandling from './middlewares/errorHandling.js'

const app = express()
app.use(express.json())

app.use(logger)
app.use("/products", productsRoutes)
app.use(errorHandling)


app.listen(5000, () => {
    console.log('Server starting...')
})