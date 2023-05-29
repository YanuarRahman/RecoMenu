import express from "express";
// import method
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    } from "../controllers/Users.js"


const router = express.Router();
// endpoint
router.get('/users',getUsers);
router.get('/users/:id',getUserById);
router.post('/users/',createUser);
router.patch('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);



export default router;