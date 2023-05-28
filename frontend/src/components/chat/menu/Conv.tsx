
import { AccountContext } from '@/context/AccountProvider';
import { setConversation } from '@/services/api';
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useContext } from 'react'

export default function Conv({user}:any) {
    const {setPerson,account}=useContext(AccountContext);

    const getUser=async()=>{
        setPerson(user);
        await setConversation({senderId:account.sub,recieverId:user.sub})

    }
  return (
    <>
    <Box className="flex bg-[#111b21] text-[#e9edef] h-[70px] py-[13px] cursor-pointer" onClick={()=>getUser()} >
        <Box>
       <Image  src={user.picture} alt="dp" width={40} height={40} className='rounded-full mx-[14px]  object-cover'/>
        </Box>
        <Box>
            <Typography>
                {user.name}
            </Typography>
        </Box>
    </Box>
    
    </>
  )
}
