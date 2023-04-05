import express from 'express'
import mongoose from "mongoose";
import UserModel from "./models/User.js"

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

app.listen(4444, (err) => {
    if(err)
    {
       return console.log(err)
    }
    console.log('Server is listening on port 4444');
});