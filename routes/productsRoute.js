import router from 'express'
import {products as products_data } from '../demo_data/products.js'
import * as ProductModel from '../data/data-model.js'

let productData = products_data

const route = router.Router()

route.get('/getall', (req, res, next) => {
    
    ProductModel.getAllProducts().then(response => {
        res.status(200).json(response)
    }).catch((error) => {
        next({
            statusCode: 500,
            errorMessage: "Get Products Services Not Working!",
            error
        })
    })
   
})

// GET ALL PRODUCTS LIST
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

// ADD NEW PRODUCT
route.post('/create', (req, res, next) => {
    let newProduct = req.body

    if(!newProduct.title || !newProduct.category_id || !newProduct.brand_id){
        next({
            statusCode: 400,
            errorMessage: "title, category_id, brand_id is required."
        })
    }else{
        ProductModel.createProduct(newProduct).then(response => {
            res.status(201).json(response)
        }).catch(error => {
            next({
                statusCode: 500,
                errorMessage: "createProduct service not working",
                error
            })
        })
    }
})

// UPDATE PRODUCT WITH PUT METHOD
route.patch('/update/:id', (req, res, next) => {
    const {id} = req.params;
    const updateProduct = req.body;

    if(!updateProduct.title || !updateProduct.category_id || !updateProduct.brand_id){
        next({
            statusCode: 400,
            errorMessage: "title, category_id, brand_id is required."
        })
    }else{
        ProductModel.updateProduct(updateProduct, id).then(response => {
            res.status(200).json(response)
        }).catch(error => {
            next({
                statusCode: 500,
                errorMessage: "Update product service not working",
                error
            })
        })
    }
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