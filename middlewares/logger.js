export default (req, res, next) => {
    console.log(`${new Date ().toUTCString()} - ${req.method} - ${req.hostname}`)
    next()
}