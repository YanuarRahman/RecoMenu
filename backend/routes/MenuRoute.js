import express from "express";
// import method
import {
    getMenus,
    getMenuById,
    createMenu,
    updateMenu,
    deleteMenu,
    } from "../controllers/Menus.js"
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();
// endpoint
router.get('/menus',verifyUser,getMenus);
router.get('/menus/:id',verifyUser,getMenuById);
router.post('/menus/',verifyUser,createMenu);
router.patch('/menus/:id',verifyUser,updateMenu);
router.delete('/menus/:id',verifyUser,deleteMenu);



export default router;