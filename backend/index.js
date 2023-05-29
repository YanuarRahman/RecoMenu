import express from "express";
import cors from "cors";
import session from "express-session";
import dontenv from "dotenv";
dontenv.config();

const app = express();

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


app.listen(process.env.APP_PORT, ()=> {
    console.log('Server Connected and Running');
});