import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async(req , res) =>{
    try{
        const response = await User.findAll({
            attributes:['uuid','username','email','role']
        });
        res.status(200).json(response);
    }catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req , res) =>{
    try{
        const response = await User.findOne({
            attributes:['uuid','username','email','role'],
            where:{
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    }catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createUser = async(req , res) =>{
    const {username, email, password, confPassword, role} = req.body;
    // validate
    if( password !== confPassword) return res.status(400).json({msg: "Konfirmasi Password Tidak Valid"});
    const hashPassword = await argon2.hash(password);
    try{
        // insert
        await User.create({
            username: username,
            email: email,
            password: hashPassword,
            role: role
        });
        res.status(201).json({msg: "Register Berhasil!!"});
    }catch(error){
        res.status(400).json({msg: error.message});
    }
}

export const updateUser = async(req , res) =>{
    const user = await User.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg:"User Tidak Ditemukan!!!"});
    const {username, email, password, confPassword, role} = req.body;
    // validate
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg:"Konfirmasi Password Tidak Valid"});
    try{
        // update
        await User.update({
            username: username,
            email: email,
            password: hashPassword,
            role: role
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "Update Berhasil!!"});
    }catch(error){
        res.status(400).json({msg: error.message});
    }
}

export const deleteUser = async(req , res) =>{
    const user = await User.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User Tidak Ditemukan!!!"})
    try{
        // delete
        await User.destroy({
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "Hapus Data Berhasil!!"});
    }catch(error){
        res.status(400).json({msg: error.message});
    }
}
