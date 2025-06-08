const { StatusCodes } = require('http-status-codes')
const BaseError = require('./baseError')

class BadRequest extends BaseError {
    constructor(propertyName,details){
        super("BadRequest",StatusCodes.BAD_REQUEST,`Invalid Structure for ${propertyName} Provided`,details)
    }
}

module.exports = BadRequest