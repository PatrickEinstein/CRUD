import Post from '../model/post.js';

// Get all Posts
export const getPosts = async (request, response) => {
    // Step -1 // Test API
    // response.send('Code for Interview');
    try{
        // finding something inside a model is time taking, so we need to add await
        const Posts = await Post.find().sort({updatedAt : -1});
        response.status(200).json(Posts);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the Post in database
export const addPost = async (request, response) => {
    // retreive the info of Post from frontend
    const post = request.body;

    const newPost = new Post(post);
    try{
        await newPost.save();
        response.status(200).json({ message: "added successfully"});
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a Post by id
export const getPostById = async (request, response) => {
    try{
        const post = await Post.findById(request.params.id);
        response.status(200).json(post);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited Post in the database
export const editPost = async (request, response) => {
    let post = await Post.findById(request.params.id);
    post = request.body;

    const editPost = new Post(post);
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