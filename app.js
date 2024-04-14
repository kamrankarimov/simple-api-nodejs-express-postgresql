import express from 'express'
import {productsRoutes} from './routes/productsRoute.js'

const app = express()
app.use(express.json())
app.use("/products", productsRoutes)

app.listen(5000, () => {
    console.log('Server starting...')
})