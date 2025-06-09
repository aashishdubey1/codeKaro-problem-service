const { markdownSanitizer } = require("../utils")


class ProblemService {
    constructor(problemRepository){
        this.problemRepository = problemRepository
    }

    async createProblem(problemData){        
        try {
            problemData.decription = markdownSanitizer(problemData.description)
            const problem = await this.problemRepository.createProblem(problemData)
            return problem;

        } catch (error) {
            console.log(error);
        }       
    }

    async getAllProblems(){
        const problem = await this.problemRepository.getAllProblems()
        return problem;
    }

    async getProblem(id){
        const problem = await this.problemRepository.getProblem(id)
        return problem;
    }

    async deleteProblem(id){
        const problem = await this.problemRepository.deleteProblem(id)
        return problem;
    }

    async updateProblem(id,body){
        body.description = markdownSanitizer(body.description); 
        const updatedProblem = await this.problemRepository.updateProblem(id,body);
        return updatedProblem;
    }

}

module.exports = ProblemService