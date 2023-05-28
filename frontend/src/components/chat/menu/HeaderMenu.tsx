import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/Bs";
export default function HeaderMenu({setDrawer}:any) {
    const[open,setOpen]=useState(null);
    const handleClose=()=>{
        setOpen(null);
        }
        const handleClick=(e:any)=>{
            setOpen(e.currentTarget);
            }
            const dialogStyle = {
               backgroundColor:"#202c33"
               
            
              };

  return (
    <>
      <i>
        <BsThreeDotsVertical className="w-5 h-7 cursor-pointer" onClick={handleClick} />
      </i>
      <Menu
     PaperProps={{ sx: dialogStyle }}
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
      anchorOrigin={{
        vertical:'bottom',
        horizontal:'center'

      }}
      transformOrigin={{
        vertical:'top',
        horizontal: 'right',
      }}
      >
        <MenuItem  className=" text-[14px] pt-[15px]  pr-[60px] pb-[5px] pl-[24px] text-[#dcdcdc] hover:bg-[#111b21] " onClick={()=>{handleClose(); setDrawer(true); }}>Profile</MenuItem>
        <MenuItem  className=" text-[14px] pt-[15px]  pr-[60px] pb-[5px] pl-[24px] text-[#dcdcdc] hover:bg-[#111b21] " onClick={handleClose}>Log out</MenuItem>
     
      </Menu>
    </>
  );
}
