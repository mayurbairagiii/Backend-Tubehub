const mongoose = require('mongoose')
const { schema } = require('./comment.model')


const likeSchema = new mongoose.Schema({
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "video"
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    },
    tweet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tweet"
    },
    likeBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
},{timestamps: true})


const likeModel = mongoose.model("like", likeSchema)

module.exports = likeModel