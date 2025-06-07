const express = require('express');

const problemRouter = express.Router();

const {ProblemController} = require('../../controllers')

problemRouter.get('/ping',ProblemController.pingProblemController)

problemRouter.get('/',ProblemController.getProblems)

problemRouter.get('/:id',ProblemController.getProblem)

problemRouter.post('/',ProblemController.addProblem)

problemRouter.delete('/:id',ProblemController.deleteProblem)

problemRouter.put('/:id',ProblemController.updateProblem)


module.exports = problemRouter
