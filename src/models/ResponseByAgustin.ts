import { Schema, model, Document } from 'mongoose';

export interface IResponse extends Document {
    commonR: string;
};
const responseSchema = new Schema({
    commonR: {
        type: String,
        required: true,
        min: 10,
        lowercase: true
    }
}, {
    timestamps: true
});
export default model<IResponse>('ResponsebyMe', responseSchema);