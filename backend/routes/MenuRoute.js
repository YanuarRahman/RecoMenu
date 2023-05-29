import express from "express";
// import method
import {
    getMenus,
    getMenuById,
    createMenu,
    updateMenu,
    deleteMenu,
    } from "../controllers/Menus.js"


const router = express.Router();
// endpoint
router.get('/menus',getMenus);
router.get('/menus/:id',getMenuById);
router.post('/menus/',createMenu);
router.patch('/menus/:id',updateMenu);
router.delete('/menus/:id',deleteMenu);



export default router;