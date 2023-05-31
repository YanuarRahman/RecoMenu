import express from "express";
import cors from "cors";
import session from "express-session";
import dontenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import MenuRoute from "./routes/MenuRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

dontenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db:db
});

// sync model for generate table autoa

// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized:true,
    store: store,
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
app.use(AuthRoute);

// store.sync();

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server Connected and Running');
});