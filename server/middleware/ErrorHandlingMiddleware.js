const ApiError = require('../error/ApiError')

module.exports = function(err, req, res, next){
    if (req instanceof ApiError)
    {
        return res.status(arr.status).json({message: err.message})
    }
    return res.status(500).json({message: 'Unexpected error'})
}

module.exports = ApiError