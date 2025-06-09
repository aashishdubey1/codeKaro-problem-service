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

}

module.exports = ProblemService