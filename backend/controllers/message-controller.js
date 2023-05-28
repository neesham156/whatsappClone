import Conversation from "../model/Conversation.js";
import Message from "../model/Message.js"


export const newMessage=async(req,res)=>{
   
    try{
const newMsg=new Message(req.body);
await newMsg.save();
await Conversation.findByIdAndUpdate(req.body.conversationID,{message:req.body.text});
 
return res.status(200).json('Message has been sent successfully');

    }
    catch(error){
        
        return res.status(500).json(error.message)
    }

}


export const getMessages=async(req,res)=>{
 
    try{
        const msg=await Message.find({conversationId:req.params.id});
        return res.status(200).json(msg);

    }catch(error){
        return res.status(500).json(error.message);
    }
}