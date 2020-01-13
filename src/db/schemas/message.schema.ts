import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    message: String,
    binaryContent: Buffer,
    contentType: String,
    authorId: mongoose.Schema.Types.ObjectId,
    groupId: mongoose.Schema.Types.ObjectId,
    createAt: Date,
    editedAt: Date,
    reactions: Array,
});
