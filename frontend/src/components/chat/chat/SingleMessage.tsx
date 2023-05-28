import { iconPDF } from "@/constants/data";
import { AccountContext } from "@/context/AccountProvider";
import { FormatDate,downloadMedia } from "@/utils/common-utils";
import { GetApp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";

export default function SingleMessage({ message }: any) {
  const { account } = useContext(AccountContext);
  return (
    <>
      {account.sub == message.senderId ? (
        <Box className="bg-[#005c4b] max-w-[60%] flex ml-auto p-[5px] w-fit rounded-[10px]  break-words">

{
    message.type=='file'? <ImageMessage message={message}  />: <TextMessage message={message}/>
}

          
        </Box>
      ) : (
        <Box className="bg-[#343f46] max-w-[60%] flex p-[5px] w-fit rounded-[10px]  break-words">
        {
    message.type=='file'? <ImageMessage message={message}  />: <TextMessage message={message}/>
}
        </Box>
      )}
    </>
  );
}


const ImageMessage=({message}:any)=>{
    return(



        <>
        <Box className="relative">
            {
                message?.text?.includes('.pdf')?
                <Box className="flex items-center text-[#e9edef] text-[14px] ">
<img src={iconPDF} alt="pdf" style={{width:80}} />
<Typography>{message.text.split('/').pop()}</Typography>
                    </Box>
                    :
                    <Image src={message.text} alt={message.text} width={200} height={200} />
            }
              <Typography className="text-[10px] mt-[6px] break-keep absolute bottom-0 right-2  text-[hsla(0,0%,100%,0.6)]">
                <GetApp className="w-4 mr-1 " onClick={(e:any)=>downloadMedia(e,message.text) }/>
            {FormatDate(message.createdAt)}
          </Typography>

        </Box>
        
        </>
    )
}

const TextMessage=({message}:any)=>{
    return  (
        <>
        <Typography className="text-[14px] pl-[5px] pr-[25px] text-[#e9edef]">
            {message.text}
          </Typography>
          <Typography className="text-[10px] mt-[6px] break-keep  text-[hsla(0,0%,100%,0.6)]">
            {FormatDate(message.createdAt)}
          </Typography>
        
        </>
    )

}
