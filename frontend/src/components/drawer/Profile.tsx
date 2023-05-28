import { AccountContext } from '@/context/AccountProvider'
import { Box, Typography } from '@mui/material'
import Image from 'next/image';
import React, { useContext, useState } from 'react'

export default function Profile() {
    const {account}=useContext(AccountContext);
  return (
    <>
<Box className="flex justify-center w-[100%] ">
<Image src={account.picture} alt="DP " width={200} height={200} className='rounded-full cursor-pointer my-[25px] '  />
</Box>   
<Box className="px-[30px] pt-[12px] pb-[2px]">
    <Typography className='text-[#008069] text-sm'>Your Name</Typography>
    <Typography className="text-[#d1d7db] my-[14px]">{account.name}</Typography>
    </Box> 
<Box>
    
    <Typography className='text-[#8696A0] text-[13px]  pt-[15px] pr-[20px] pb-[28px] pl-[30px]'>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
    </Box>  
    <Box className="px-[30px] pt-[12px] pb-[2px]">
    <Typography className='text-[#008069] text-sm'>About</Typography>
    <Typography className="text-[#d1d7db] my-[14px]">Time doesn't heal anything.it's just teaches us how to live with pain</Typography>
    </Box> 
    </>
  )
}
