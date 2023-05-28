import { Box, InputBase } from "@mui/material";
import React from "react";
import { AiOutlineSearch } from "react-icons/Ai";
import { MdFilterList } from "react-icons/Md";
export default function Search({setText}:any) {
  return (
    <Box className="bg-[#111b21] h-[45px] flex items-center "> 
      <Box className="bg-[#202c33] rounded-lg relative mx-[13px] my-[0px] w-[100%]">
   
          <i className="absolute h-[100%] p-[8px] text-[#919191] cursor-pointer">
            <AiOutlineSearch  />
          </i>
        
        <InputBase placeholder="Search or start new chat" className="w-[100%] p-[16px] h-[15px]  pl-[65px] text-[#919191] text-[#14px]" onChange={(e:any)=>setText(e.target.value)} />
      </Box>
 
        <i className=" h-[100%] text-[22px] p-[8px] text-[#919191] cursor-pointer">
            <MdFilterList/>
        </i>
     
    </Box>
  );
}
