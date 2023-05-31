import { response } from "express";
import Menu from "../models/MenuModel.js";
import User from "../models/UserModel.js";

export const getMenus = async(req , res) =>{
    try{
        let response;
        if(req.role === "admin"){
            response = await Menu.findAll({
                include:[{
                    model: User
                }]
            });
        }else{
            response = await Menu.findAll({
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User
                }]
            });
        }
        res.status(200).json(response);
    }catch (error){
        res.status(500).json({msg: error.message});
    }
}

export const getMenuById = (req , res) =>{
    
}

export const createMenu = async(req, res) =>{
    const {nama, rasa, qty, harga} = req.body;
    try {
        await Menu.create({
            nama: nama,
            rasa: rasa,
            qty: qty,
            harga: harga,
            userId: req.userId
        });
        res.status(201).json({msg: "Menu Berhasil Dibuat"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateMenu = (req , res) =>{
    
}

export const deleteMenu = (req , res) =>{
    
}