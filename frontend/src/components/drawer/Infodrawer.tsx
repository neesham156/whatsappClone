import { Box, Drawer, Typography } from '@mui/material'
import React from 'react'
import { HiArrowLeft } from 'react-icons/Hi'
import Profile from './Profile'

export default function Infodrawer({open,setOpen}:any) {
    console.log("open",open)
    const handleClose=()=>{
        setOpen(false)
    }
    const drawerStyle = {
     left:52,
     top:20,
     height:'94.9%',
     width:'29.3%',
     boxShadow:'none'
       
    
      };
  return (
   <Drawer open={open} onClose={handleClose} PaperProps={{ sx: drawerStyle }}  hideBackdrop={true}   style={{zIndex:1500}}>
<Box className="bg-[#202c33] flex   p-5 gap-7  h-[97px] text-[#d9dee0] ">
     <i className='mt-auto font-semibold'><HiArrowLeft onClick={()=>setOpen(!open)} className='h-6 w-5 cursor-pointer ' /></i>
     <Typography className=' font-semibold  text-[16px] mt-auto'>Profile</Typography>
</Box>
<Box className="bg-[#111b21] h-[87.1%]">
<Profile/>
</Box>
   </Drawer>
  )
}
