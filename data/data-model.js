import db from './db-config.js'

var getAllProducts = () => {
    return db("products")
}

var createProduct = (newProductData) => {
    return db("products")
        .insert(newProductData, "id")
        .then(([id]) => {
            return db("products").where(id).first();
        })
}

var updateProduct = (productData, id) => {
    return db("products")
        .update(productData)
        .where({ id })
        .then(updated => {
            if(updated){
                return db("products").where(id).first()
            }
        })
}

export {
    getAllProducts,
    createProduct,
    updateProduct
}