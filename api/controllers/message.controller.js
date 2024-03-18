import Message from '../models/message.model.js';
import { errorHandler } from '../utils/error.js';

export const storeMessage = async (req, res, next)=>{
    const {firstname, lastname, email, message} = req.body;
    if(!firstname || !lastname || !email ||  lastname==='' || firstname==='' || email==='' || message===''){
        next(errorHandler(400, 'All fields are required'));
    }
    const newMessage = new Message({firstname, lastname, email, message});
    try{
        await newMessage.save()
        res.status(201).json("message send successfully");
    }
    catch(error){
        next(error);
    }
}