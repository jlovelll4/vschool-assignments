const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
    correct: {
        type: String,
        required: true
    },
    incorrect: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Answers", answerSchema)