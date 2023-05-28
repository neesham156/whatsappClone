import { getUser } from '@/services/api';
import { Box, Divider } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import Conv from './Conv';
import { AccountContext } from '@/context/AccountProvider';

export default function Conversation({text}:any) {

  const {account}=useContext(AccountContext);
  const[users,setUsers]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      
let res=await getUser();
const FilterData=res.filter((user:any)=>{
  return user.name.toLowerCase().includes(text.toLowerCase())

})
console.log("hi",FilterData)
setUsers(FilterData);
    }
    fetchData(); 

    
  },[text])
  return (
   <>
   <Box className="h-[82.43vh] overflow-auto bg-[#111b21]">
{users.map((user:any)=>{
  if(user.sub!==account.sub)
  
  
  return(
  <>
  
  <Conv user={user}/>
  <Divider className='bg-[#2a3942] ml-[70px] opacity-[.6]'/>
  </>
  )
  

})
}
    
   </Box>
   
   </>
  )
}
