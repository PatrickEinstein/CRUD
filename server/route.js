import express from 'express';
import { getPosts, addPost, getPostById, editPost, deletePost } from '../controller/post-controller.js';

const router = express.Router();

router.get('/', getPosts);

export const Routes = router.post('/add', addPost);

router.get('/:id', getPostById);
router.put('/:id', editPost);
router.delete('/:id', deletePost);

export default router;