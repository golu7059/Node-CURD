import express from 'express';
import { home, about, contact, createUser, getUser, deleteUser, updateUser, findUser } from '../controller/userController.js';

const router = express.Router();

router.get('/', home);
router.get('/about', about);
router.get('/contact', contact);
router.post('/signup', createUser);            // Route for creating an user
router.get('/getUser',getUser)                 // Router for getting all user
router.delete('/deleteUser/:id',deleteUser)    // Router fot deleting an user
router.put('/updateUser/:id',updateUser)       // Router for updating an user
router.get('/findUser/:id', findUser);         // Router for find an user

export default router;
