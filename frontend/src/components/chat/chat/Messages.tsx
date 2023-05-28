import { Box,styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import { AccountContext } from '@/context/AccountProvider'
import { getMessages, newMessage } from '@/services/api';
import SingleMessage from './SingleMessage';



export default function Messages({person,conversation}:any) {
  const {account}=useContext(AccountContext);
  const [messages,setMessages]=useState([]);
  const [newMessageFlag,setNewMessageFlag]=useState(false);
  const [value,setValue]=useState<any>('');
  const [file,setFile]=useState('');
  const [image,setImage]=useState('')

  useEffect(()=>{
    const getMessagesDetails=async()=>{
      let data=await getMessages(conversation._id);
      setMessages(data)
    }
    conversation._id && getMessagesDetails();

  },[person._id,conversation._id,newMessageFlag])

  const sendText=async(e:any)=>{
    
   
    const code=e.code|| e.which;
    if(code=="Enter")
    {
let message={};
      if(!file)
      {
       message={
        senderId:account.sub,
        receiverId:person.sub,
        conversationId:conversation._id,
        type:'text',
        text:value
      }
    }
      else{
         message={
          senderId:account.sub,
          receiverId:person.sub,
          conversationId:conversation._id,
          type:'file',
          text:image
        }

      }
      
      await newMessage(message);
      setValue('');
      setImage('');
      setFile('');
      setNewMessageFlag(!newMessageFlag)
    }


  }
  return (
   <>
   <Box className="bg-msg bg-[50%] ">
    <Box className="h-[81vh] overflow-y-scroll scrollbar-hide">
      {
        messages && messages.map((msg:any)=>{
          return(
          <>
          <Box className="py-[1px] px-[60px]">
          <SingleMessage message={msg}/>
          </Box>
          </>
          )
        })
      }

    </Box>
    <Footer sendText={sendText} setValue={setValue} value={value} file={file} setFile={setFile} setImage={setImage}/>
   </Box>
   </>
  )
}
