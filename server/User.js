import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
displayName : String ,
photoUrl : String ,
firstName : String,
lastName : String ,
topics :[{
  text: String,
}],

posts: {
     type: Schema.Types.ObjectId,
     ref: 'Blog'
 },



});

export default model('User', UserSchema);
