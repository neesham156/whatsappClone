import React, { useContext, useState } from 'react'
import { AccountContext } from '@/context/AccountProvider'
import { Box } from '@mui/material';
import Image from 'next/image';
import { MdGroups } from 'react-icons/Md';
import { HiStatusOnline } from 'react-icons/Hi';
import { BsFillChatLeftTextFill,BsThreeDotsVertical } from 'react-icons/Bs';
import HeaderMenu from './HeaderMenu';
import Infodrawer from '@/components/drawer/Infodrawer';


export default function Header() {
    const {account}=useContext(AccountContext);
    const [openDrawer,setOpenDrawer]=useState(false)
    console.log("hi",openDrawer)

  return (
    <> 
   <Box className="h-[54px] bg-[#202c33] px-[16px] py-[8px] flex justify-between items-center ">
    <Image src={account.picture} alt="DP " width={40} height={40} className='rounded-full cursor-pointer' onClick={()=>setOpenDrawer(!openDrawer)} />
    <Box className=" flex gap-6 text-[#919191] ml-auto text-[22px]">
        <i><MdGroups className='w-7 h-7 cursor-pointer'/></i>
        <i><HiStatusOnline className='w-5 h-7 cursor-pointer'/></i>
        <i><BsFillChatLeftTextFill className='w-5 h-7 cursor-pointer'/></i>
       
        <HeaderMenu setDrawer={setOpenDrawer}/>

    </Box>
   </Box>

   <Infodrawer open={openDrawer} setOpen={setOpenDrawer}/>
   </>
  )
}
