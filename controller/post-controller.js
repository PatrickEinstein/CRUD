//import Post from '../model/post.js';
import {Post} from '../model/post.js';

// Get all Posts
export const getPosts = async (request, response) => {
    try{
        const posts = await Post.find().sort({updatedAt : -1});
        response.status(200).json(posts);
        console.log(posts)
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the Post in database
export const addPost = async (req, res) => {
    // retreive the info of Post from frontend
    // const post = request.body;
    // const newPost = new Post(post);

    const posts = new Post ({
                title: req.body.title,
                type :  req.body.type,
                description: req.body.description,
            })
    try{
        const result = await posts.save();
        res.json(result);
        res.status(200).json({ message: "added successfully"});
    } catch (error){
        // response.status(409).json({ message: error.message});
        res.send(`some error occured -> ${error}`);     
    }
}





// Get a Post by id
export const getPostById = async (request, response) => {
    try{
        const posts = await Post.findById(request.params.id);
        response.status(200).json(posts);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited Post in the database
export const editPost = async (request, response) => {
    let posts = await Post.findById(request.params.id);
   const postToEdit = request.body;

    const editPost = new Post(postToEdit);
    try{
        await Post.updateOne({_id: request.params.id}, editPost);
        response.status(200);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of Post from the database
export const deletePost = async (request, response) => {
    try{
        await Post.deleteOne({_id: request.params.id});
        response.status(201).json("Post deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}