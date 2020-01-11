import * as mongoose from 'mongoose';

export const GroupSchema = new mongoose.Schema({
    description: String,
    avatar: Buffer,
    ownerId: mongoose.Schema.Types.ObjectId,
    createAt: Date,
    isPublic: Boolean,
});
