import router from 'express'
import * as ProductModel from '../data/data-model.js'

let productData = products_data
const route = router.Router()

// GET ALL PRODUCTS LIST
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

// GET PRODUCT BY ID
route.get('/get/:id', (req, res, next) => {
    const {id} = req.params
    
    ProductModel.findProductById(id)
        .then(response => {
            if(response){
                res.status(200).json(response)
            }else{
                next({
                    statusCode: 400,
                    errorMessage: "Product Not Found"
                })
            } 
        }).catch(error => {
            next({
                statusCode: 500,
                errorMessage: "System Error",
                error
            })
        })
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

// UPDATE PRODUCT WITH PATCH METHOD
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

// DELETE PRODUCT SERVICE
route.delete('/delete/:id', (req, res, next) => {
    const {id} = req.params

    ProductModel.findProductById(id).then(response => {
        ProductModel.deleteProduct(id)
        .then(response => {
            if(response){
                res.status(204).json(response)
            }else{
                next({
                    statusCode: 400,
                    errorMessage: "Product not found or other system error"
                })
            }
        }).catch(error => {
            next({
                statusCode: 500,
                errorMessage: "Product delete service not working",
                error
            })
        })
    }).catch(error => {
        next({
            statusCode: 500,
            errorMessage: "System error",
            error
        })
    })
    
    

})

export {route as productsRoutes}