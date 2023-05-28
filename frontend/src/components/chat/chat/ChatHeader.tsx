import { AccountContext } from '@/context/AccountProvider'
import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/Ai'
import HeaderMenu from '../menu/HeaderMenu'
import Image from 'next/image'
import { defaultProfilePicture } from '@/constants/data'

export default function ChatHeader({person}:any) {
   
  return (
    <Box className="h-[54px] bg-[#202c33] text-[#919191]  px-[16px] py-[8px] flex ">
        <Image src={person.picture} alt="DP " width={40} height={40} className='rounded-full cursor-pointer' />
        <Box className="ml-[12px] text-[#e9edef] ">
            <Typography>{person.name}</Typography>
            <Typography className="text-[#919191] text-[12px]">Offline</Typography>
        </Box>
        <Box className="ml-auto flex items-center text-[22px] gap-7 ">
    <i> <AiOutlineSearch  /></i>
    <i> <HeaderMenu /></i>

        </Box>
        
    </Box>
  )
}
