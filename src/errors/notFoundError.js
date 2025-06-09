const { StatusCodes } = require('http-status-codes')
const BaseError = require('./baseError')

class NotFound extends BaseError {
    constructor(resourceName,resourceValue){
        super("NotFound",StatusCodes.NOT_FOUND,`Can't find resource ${resourceName} with value ${resourceValue}`,{resourceName,resourceValue})
    }
}

module.exports = NotFound