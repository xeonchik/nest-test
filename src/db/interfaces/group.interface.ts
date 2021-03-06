import { Document } from 'mongoose';

export interface Group extends Document {
    readonly name: string;
    readonly description: string;
    readonly avatar: Buffer;
    readonly ownerId: string;
}
