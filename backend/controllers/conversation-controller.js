import Conversation from "../model/Conversation.js";

export const newConversation=async(req,res)=>{
    try{
const senderId=req.body.senderId;
const recieverId=req.body.recieverId;

const exist=await Conversation.findOne({members:{ $all:[recieverId,senderId]}});
if(exist){
    return res.status(200).json('conversation already exist');

}
const newConver=new Conversation({
    members:[senderId,recieverId]
})
await newConver.save();
return res.status(200).json('conversation saved successfully');
    }catch(error)
    {
        return res.status(500).json(error.message);
    }
}

export const getConversation=async(req,res)=>{
try{
    const senderId=req.body.senderId;
    const recieverId=req.body.recieverId;
    
    const conversation=await Conversation.findOne({members:{ $all:[recieverId,senderId]}});
    return res.status(200).json(conversation);

}
catch(error)
{
    return res.status(500).json(error.message)

}
}