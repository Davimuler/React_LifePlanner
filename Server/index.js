import express from 'express'
import mongoose from "mongoose";
import UserModel from "./models/User.js"
import cors from 'cors'

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://Davimuler:135792468@cluster0.zfojr0v.mongodb.net/planner?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    ()=>{
        console.log('DB OK')
    }
).catch((err)=>{
    console.log('DB error',err)
})

const app = express();

app.get('/', (req, res) => {
    res.send('Hellsdo, world!');
});

app.use(express.json())
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use('/uploads',express.static('uploads'))

app.post('/register',async (req, res)=>{
    try{

        const doc=new UserModel({
            email:req.body.email,
            fullName:req.body.fullName,
            passwordHash:req.body.password
        });

        const user=await doc.save();

        res.json(user)
    }catch (err){
        console.log(err)
        res.status(500).json({
            message:"some error to create user"
        });
    }
})

app.listen(4444, (err) => {
    if(err)
    {
       return console.log(err)
    }
    console.log('Server is listening on port 4444');
});