const { StatusCodes } = require('http-status-codes')
const BaseError = require('./baseError')

class NotImplemented extends BaseError {
    constructor(propertyName){
        super('NotImplemented',StatusCodes.NOT_IMPLEMENTED,`The feature of ${propertyName} is Not Implemented yet`,{})
    }
}

module.exports = NotImplemented 