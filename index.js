const express = require("express");
const { connection } = require("./config/db");
const { authentication } = require("./middleware/authentication");
const { todoRouter } = require("./routes/note.routes");
const { userRouter } = require("./routes/user.routes");
require(`dotenv`).config();


const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Welcome to Homepage")
    })

app.use(`/user`,userRouter)
app.use(authentication)
app.use(`/note`,todoRouter)

    app.listen(process.env.port, async() => {
        try{
            await connection
            console.log("connected");
        }
        catch(e){
            console.log(e);
        }
        console.log(`listening to port http://localhost:${process.env.port}`)
    })