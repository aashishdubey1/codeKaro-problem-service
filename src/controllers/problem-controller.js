const { StatusCodes } = require('http-status-codes')
const NotImplemented = require('../errors/notimplemented-error')
const {ProblemService} = require("../services")
const {ProblemRepository} = require('../repository')

const problemService = new ProblemService(new ProblemRepository())


const pingProblemController = (req,res)=>{
    return res.send("Ping Controller is Up")
}


const addProblem = async (req,res,next)=>{
    try {
        const newproblem = await problemService.createProblem(req.body)
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Problem create successfully",
            error:{},
            data:newproblem
        });
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