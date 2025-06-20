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
        if(!problem){
            throw new NotFound("Problem",id)
        }
        return problem;
    }

    async deleteProblem(id){
        const problem = await Problem.findByIdAndDelete(id)
        if(!problem){
            throw new NotFound("Problem",id);
        }
        return problem;
    }

    async updateProblem(id,body){
        const updatedProblem = await Problem.findByIdAndUpdate(id,body,{new:true})
        if(!updatedProblem){
            throw new NotFound("Problem",id);
        }
        return updatedProblem;
    }

}

module.exports = ProblemRepository