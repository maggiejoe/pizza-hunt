const { Schema, model } = require('mongoose');

const CommentsSchema = new Schema({
    writtenBy: {
        type: String
    },
    CommentBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Comments = model('Comments', CommentsSchema);

module.exports = Comments;