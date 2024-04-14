import router from 'express'
import {products as products_data } from '../demo_data/products.js'
import { findProduct } from '../data/data-model.js'

let productData = products_data

const route = router.Router()

route.get('/getall', (req, res, next) => {
    
    findProduct().then(products => {
        res.status(200).json(products)
    }).catch((error) => {
        next({
            statusCode: 500,
            errorMessage: "Error: Get Products Services Not Working!",
            error
        })
    })
   
})

route.get('/get/:id', (req, res, next) => {
    const {id} = req.params
    const product = productData.find(product => product.id === parseInt(id))
    if(product) { 
        res.status(200).json(product)
    }else{
        next({
            statusCode: 400,
            errorMessage: `Product ID number ${id} was not found.`
        })
    } 
})

let nextID = 4;

route.post('/create', (req, res) => {
    let newProduct = req.body
    newProduct.id = nextID
    nextID++
    productData.push(newProduct)
    res.status(201).json(newProduct)
})

route.delete('/delete/:id', (req, res, next) => {
    let productID = req.params.id
    let getProduct = productData.find(product => product.id === Number(productID))
    
    if(getProduct) {
        productData = productData.filter(product => product.id !== Number(productID))
        res.status(204).end()
    }else{
        next({
            statusCode: 400,
            errorMessage: `DeleteError: Product ID number was not found.`
        })
    }
})

export {route as productsRoutes}