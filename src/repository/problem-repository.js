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

}

module.exports = ProblemRepository