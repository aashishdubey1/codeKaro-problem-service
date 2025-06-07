const {StatusCodes} = require('http-status-codes')

const pingProblemController = (req,res)=>{
    return res.send("Ping Controller is Up")
}


const addProblem = (req,res)=>{
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented"
    })
}

const getProblem = (req,res)=>{
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented"
    })
}

const getProblems = (req,res)=>{
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented"
    })
}

const deleteProblem = (req,res)=>{
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented"
    })
}

const updateProblem = (req,res)=>{
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented"
    })
}

module.exports = {
    getProblem,
    getProblems,
    addProblem,
    deleteProblem,
    updateProblem,
    pingProblemController

}