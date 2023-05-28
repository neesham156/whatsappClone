import { Box, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";
import { uploadFile } from "@/services/api";

export default function Footer({sendText,setValue,value,file,setFile,setImage}:any) {




  useEffect(()=>{
    const getImage=async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);
      let response =  await uploadFile(data);
      setImage(response.data);
      }
    }
    getImage();

  },[file])
  
  const onFilechange=(e:any)=>{

    setFile(e.target.files[0]);
    setValue(e.target.files[0].name)
  }
  return (
    <>
      <Box className="h-[57px] bg-[#202c33] flex w-[100%] items-center px-[15px] text-[#919191] gap-[8px]">
        <EmojiEmotionsOutlined />
<label htmlFor="fileInput">        <AttachFile className="rotate-[40deg] cursor-pointer"/></label>

        <input type='file' id="fileInput" className="hidden" onChange={(e:any)=>onFilechange(e)}/>
        <Box className="bg-[#2a3942] rounded-md  w-[93.9%]">
          <InputBase
            placeholder="Type a Message"
            className="w-[100%] p-[20px] h-[20px] pl-[20px] text-[14px] text-[#d1d7db] "
            onChange={(e:any)=>setValue(e.target.value)}
            onKeyDown={(e:any)=>sendText(e)}
            value={value}
          />
        </Box>
        <Mic />
      </Box>
    </>
  );
}
