import express from 'express';
import { addUser,getUser } from '../controllers/user-controller.js';
import { newMessage,getMessages } from '../controllers/message-controller.js';
import { newConversation,getConversation } from '../controllers/conversation-controller.js';
import { uploadFile ,getImage} from '../controllers/image-controller.js';
const route=express.Router();
import upload from '../utils/upload.js'


route.post('/add',addUser);
route.get('/users',getUser);
route.post('/conversation/add',newConversation);
route.post('/message/add',newMessage);
route.post('/conversation/get',getConversation);
route.get('/message/get/:id',getMessages);
route.post('/file/upload',upload.single('file'),uploadFile);
route.get('/file/:filename',getImage);


export default route;