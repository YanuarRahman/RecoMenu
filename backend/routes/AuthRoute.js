import express from "express";
import {Login,logOut,Me} from "../controllers/Auth.js";

const router = express.Router();
// endpoint
router.get('/me',Me);
router.post('/login',Login);
router.delete('/logout',logOut);

export default router;