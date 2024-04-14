export default (err, req, res, next) => {
    //console.log(`${err.statusCode} -- ${err.errorMessage}`)
    res.status(err.statusCode).json(err)
}