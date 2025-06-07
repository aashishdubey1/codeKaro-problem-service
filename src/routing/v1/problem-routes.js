const express = require('express');

const problemRouter = express.Router();

const {problemController} = require('../../controllers')

problemRouter.get('/ping',problemController.pingProblemController)

problemRouter.get('/',problemController.getProblems)

problemRouter.get('/:id',problemController.getProblem)

problemRouter.post('/',problemController.addProblem)

problemRouter.delete('/:id',problemController.deleteProblem)

problemRouter.put('/:id',problemController.updateProblem)


module.exports = problemRouter
