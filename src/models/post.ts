import { model , Schema, Document} from "mongoose";

export interface IPost extends Document {
    title: String;
    url: String;
    content: String;
    image: String;
    createdA: Date;
    updateAt: Date;
    //idUser:String;
}
const postSchema = new Schema<IPost>({
    title: { type: String, required: true },
    url: { type: String, required: true, unique: true, lowercase: true },
    content: { type: String, required: true },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
    /*idUser:{type: String,required:true  }*/

});
export default model<IPost>("Post", postSchema);