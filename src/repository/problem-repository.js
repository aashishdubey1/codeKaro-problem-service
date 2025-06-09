const NotFound = require("../errors/notFoundError");
const Problem = require("../models/problem-model");


class ProblemRepository{

    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title:problemData.title,
                description:problemData.description,
                testCases:problemData.testCases ? problemData.testCases : [],
                editorial:""
            })
            return problem;
        } catch (error) {
            console.log(error)
        }
    }

    async getAllProblems(){
        const problems = await Problem.find({})
        return problems;
    }

    async getProblem(id){
        const problem = await Problem.findById(id);
        return problem;
    }

    async deleteProblem(id){
        const problem = await Problem.findByIdAndDelete(id)
        if(!problem){
            throw new NotFound("Problem",id);
        }
        return problem;
    }
}

module.exports = ProblemRepository