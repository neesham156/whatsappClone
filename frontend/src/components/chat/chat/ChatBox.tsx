import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '@/context/AccountProvider';
import { getConversation } from '@/services/api';

export default function ChatBox() {
    const {person,account}=useContext(AccountContext);
    const [conversation,setConversation]=useState<any>([]);
    useEffect(()=>{
      const getConversationDetails=async()=>{
       let data= await getConversation({senderId:account.sub,recieverId:person.sub})
        
       setConversation(data);
      }    
      getConversationDetails();
    },[person.sub])
  return (
   <>
   <Box className="">
    <ChatHeader person={person}/>
    <Messages person={person} conversation={conversation}/> 
   </Box>
   
   
   </>
  )
}
