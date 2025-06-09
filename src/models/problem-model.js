const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    difficulty :{
        type:String,
        enum:["easy","medium","hard"],
        required:true,
        default:"easy"
    },
    testCases:[
        {
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                require:true
            }
        }
    ],
    editorial:{
        type:String,
    }

})

const Problem = mongoose.model("Problem",problemSchema)


module.exports = Problem