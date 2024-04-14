import express from 'express'
import {products} from './demo_data/products.js'

var app = express()

app.get('/products', (req, res) => {
    res.status(200).json(products)
})

app.get('/products/:id', (req, res) => {
    const {id} = req.params
    const product = products.find(product => product.id === parseInt(id))
    if(product) res.status(200).json(product)
    else res.status(404).json([{error: true, errMsg: `Product ID number ${id} was not found.`}])
})

app.listen(5000, () => {
    console.log('Server starting...')
})