import { Schema, model, Document } from 'mongoose';

export interface IQuestion extends Document {
    commonQ: string;
};
const questionSchema = new Schema({
    commonQ: {
        type: String,
        required: true,
        min: 10,
        lowercase: true
    }
}, {
    timestamps: true
});
export default model<IQuestion>('Question', questionSchema);