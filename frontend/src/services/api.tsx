import axios from "axios";
const url="http://localhost:3080";
export const addUser=async(data:any)=>{
    try{
        let response = await axios.post(`${url}/add`, data);
        return response.data;
    }
    catch(error:any){
        console.log("Error while addUser Api",error.message);

    }
}


export const getUser=async()=>{
    try{
        let response = await axios.get(`${url}/users`);
        return response.data;
    }
    catch(error:any){
        console.log("Error while getUser Api",error.message);

    }
}

export const setConversation=async(data:any)=>{
    try{
       await axios.post(`${url}/conversation/add`,data)
    }
    catch(error:any){
        console.log("Error while setConversation Api",error.message);

    }
}

export const getConversation=async(data:any)=>{
    try{
   let res= await axios.post(`${url}/conversation/get`,data);
   return res.data;
    }
    catch(error:any){
        console.log("Error while getConversation Api",error.message);

    }
}

export const newMessage=async(data:any)=>{
    try{
   let res=    await axios.post(`${url}/message/add`,data);
   return res.data
    }
    catch(error:any){
        console.log("Error while newMessage Api",error.message);

    }
}

export const getMessages=async(id:any)=>{
 
    try{
         let res= await axios.get(`${url}/message/get/${id}`);
        return res.data;


    }catch(error:any){
        console.log("Error while getMessage Api",error.message);

    }
}


export const uploadFile=async(data:any)=>{
    try{
        return await axios.post(`${url}/file/upload`,data);
    }
    catch(error:any){
        console.log("Error while uploadFile Api",error.message);
    }
}



