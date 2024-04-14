import db from './db-config.js'

var findProduct = () => {
    return db("products")
}

export {
    findProduct
}