import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login  = async (req, res) =>{
    const user = await User.findOne({
        where:{
            // berdasarkan email
            email: req.body.email
        }
    });
    if(!user) return res.status(404).json({msg: "User Tidak Ditemukan!!!"});

    //verifikasi 
    const match = await argon2.verify(user.password, req.body.password);
    // jika tidak cocok
    if(!match) return res.status(400).json({msg: "Password Salah"});
    // set sesssion
    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const username = user.username;
    const email = user.email;
    const role = user.role;
    // parsing
    res.status(200).json({uuid, username, email, role});
}

export const Me = async (req, res) => {
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon Login Terlebih Dahulu!!"});
    }
    // kalo ada session
    const user = await User.findOne({
        attributes:['uuid','username','email','role'],
        where:{
            // berdasarkan email
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User Tidak Ditemukan!!!"});
    // jika ada user
    res.status(200).json(user);
}

export const logOut = (req, res) =>{
    req.session.destroy((err) => {
        if(err) return res.status(400).json({msg: "Tidak Dapat Logout"});
        res.status(200).json({msg: "Logout Berhasil"});
    });
}
