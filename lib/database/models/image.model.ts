
import { model, models, Schema } from 'mongoose';
import { config } from 'process';


export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicID: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: object;
    transformationURL?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: {
        
        _id: string;
        firstName: string;
        lastName: string;
    } // Assuming author is an ObjectId, you can represent it as a string
    createdAt?: Date;
    updatedAt?: Date;
}


const ImageSchema = new Schema ({

    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicID: { type: String, required: true },
    secureUrl: { type: URL, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationURL: { type: URL},
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;