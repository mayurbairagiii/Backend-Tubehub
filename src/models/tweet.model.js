const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        reqf: "user"
    }
},{timestamps: true})

const tweetModel = mongoose.model("tweet", tweetSchema)

module.exports = tweetModel