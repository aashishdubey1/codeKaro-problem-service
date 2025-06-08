const {StatusCodes} = require('http-status-codes')
const NotImplemented = require('../errors/notimplemented-error')

const pingProblemController = (req,res)=>{
    return res.send("Ping Controller is Up")
}


const addProblem = (req,res,next)=>{
    try {
        throw new NotImplemented("add Problem")
    } catch (error) {
        next(error)
    }
}

const getProblem = (req,res,next)=>{
    try {
        throw new NotImplemented("add Problem")
    } catch (error) {
        next(error)
    }
}

const getProblems = (req,res,next)=>{
    try {
        throw new NotImplemented("add Problem")
    } catch (error) {
        next(error)
    }
}

const deleteProblem = (req,res,next)=>{
    try {
        throw new NotImplemented("add Problem")
    } catch (error) {
        next(error)
    }
}

const updateProblem = (req,res,next)=>{
    try {
        throw new NotImplemented("add Problem")
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getProblem,
    getProblems,
    addProblem,
    deleteProblem,
    updateProblem,
    pingProblemController

}