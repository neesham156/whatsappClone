import { Box, Dialog } from "@mui/material";
import React, { useContext } from "react";
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { AccountContext } from "@/context/AccountProvider";

export default function ChatDialog() {
  const {person}=useContext(AccountContext);
  const dialogStyle = {
    height: "95%",

    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxshadow: "none",
    borderRadius: 0,
    overflow: "hidden",
  };
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      className="  rounded-none   md:mx-[20px] "
      maxWidth={'md'}
    >
      <Box className="flex">
        <Box className="min-w-[450px]">
            <Menu/>
        </Box>
         <Box className="min-w-[300px] w-[73%] h-[100%] border-l-zinc-600 border-l-[1px] ">
          {Object.keys(person).length?<ChatBox/>:<EmptyChat/>}
           
         </Box>
      </Box>
    </Dialog>
  );
}
