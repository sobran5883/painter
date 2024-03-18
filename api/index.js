import express from 'express';
import mongoose from 'mongoose';
import messageRouter from './routes/message.route.js'
import path from 'path';
mongoose.connect("mongodb+srv://sobran0054:rajak0054@painter.it6lakm.mongodb.net/?retryWrites=true&w=majority&appName=painter")
        .then(()=>{
            console.log("connected to mongodb!!");
        })
        .catch((err)=>{
            console.log(err);
        })
        const __dirname = path.resolve();
const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});

app.use('/api/message', messageRouter);
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})