import express from 'express'
import {products} from './demo_data/products.js'

var app = express()

app.get('/products', (req, res) => {
    res.status(200).json(products)
})

app.listen(5000, () => {
    console.log('Server starting...')
})