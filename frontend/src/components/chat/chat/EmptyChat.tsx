import { emptyChatImage } from '@/constants/data'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { FaLock } from 'react-icons/Fa'

export default function EmptyChat() {
  return (
   <Box className="bg-[#222e35] py-[30px] text-center h-[100vh]">
    <Box className="flex flex-col justify-center  ">
     <Image src="/empty.svg" alt="img " width={300} height={300} className='mt-[170px]  ml-[35%]'/> 
     <Typography className='text-[32px] mt-[25px] mb-[10px] font-light font-[inherit] text-[#e9edefe0]'>WhatsApp Web</Typography>
     <Typography className="text-[14px] text-[#8696a0] font-[inherit]">Send and receive messages without keeping your phone online.<br/>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Typography>
    
     <Typography className="text-[#667781] flex justify-center items-center mt-[200px] gap-1 text-[12px] font-[inherit]"> <i><FaLock/></i>End-to-end encrypted</Typography>
   
    </Box>
    <Box className="bg-[#008069] w-[100%] h-[5px] mt-[35px] ">

     </Box>
   
   </Box>
  )
}
