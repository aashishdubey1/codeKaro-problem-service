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

const getProblem = async (req,res,next)=>{
    try {
        const id = req.params.id
        const problem = await problemService.getProblem(id);
        res.status(StatusCodes.OK).json({
            success:true,
            message:"Problem Fetch Successfully",
            error:{},
            data:problem
        })
    } catch (error) {
        next(error)
    }
}

const getProblems = async (req,res,next)=>{
    try {
        const problems = await problemService.getAllProblems()
        res.status(StatusCodes.OK).json({
            success:true,
            message:"Problem Fetched Successfully",
            error:{},
            data:problems
        })
    } catch (error) {
        next(error)
    }
}

const deleteProblem = async (req,res,next)=>{
    try {
        const problemId  = req.params.id
        const deletedProblem = await problemService.deleteProblem(problemId)
        res.status(StatusCodes.OK).json({
            success:true,
            message:"Problem deleted Successfully",
            error:{},
            data:deletedProblem
        })
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