import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
    login: String,
    password: String,
    avatar: Buffer,
    createdAt: Date
});
