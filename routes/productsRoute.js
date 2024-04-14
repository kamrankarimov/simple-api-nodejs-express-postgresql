import router from 'express'
import {products} from '../demo_data/products.js'
let productData = products

const route = router.Router()

route.get('/getall', (req, res) => {
    res.status(200).json(productData)
})

route.get('/get/:id', (req, res) => {
    const {id} = req.params
    const product = productData.find(product => product.id === parseInt(id))
    if(product) res.status(200).json(product)
    else res.status(404).json({error: true, errMsg: `Product ID number ${id} was not found.`})
})

let nextID = 4;

route.post('/create', (req, res) => {
    let newProduct = req.body
    newProduct.id = nextID
    nextID++
    productData.push(newProduct)
    res.status(201).json(newProduct)
})

route.delete('/delete/:id', (req, res) => {
    let productID = req.params.id
    let getProduct = productData.find(product => product.id === Number(productID))
    
    if(getProduct) {
        productData = productData.filter(product => product.id !== Number(productID))
        res.status(204).end()
    }else{
        res.status(404).json({error: true, errMsg: `Product ID number ${productID} was not found.`})
    }
})

export {route as productsRoutes}