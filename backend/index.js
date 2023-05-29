import express from "express";
import cors from "cors";
import session from "express-session";
import dontenv from "dotenv";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import MenuRoute from "./routes/MenuRoute.js";

dontenv.config();

const app = express();

// sync model for generate table auto
(async()=>{
    await db.sync();
})();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized:true,
    cookie:{
        // set if http false if https true
        secure:'auto'
    }
}));

// middleware cookie & credential FE
app.use(cors({
    credentials:true,
    // domain akses api
    origin: 'http://localhost:3000'
}));

// middleware get data json
app.use(express.json());
app.use(UserRoute);
app.use(MenuRoute);


app.listen(process.env.APP_PORT, ()=> {
    console.log('Server Connected and Running');
});