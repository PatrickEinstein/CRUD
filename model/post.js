import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    title: String,
    type: String,
    description: String,
},{
    timestamps: true
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'Post');
// we need to turn it into a model
export const Post = mongoose.model('Post', userSchema);

// export default post;

