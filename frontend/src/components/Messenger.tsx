import React from 'react'
import LoginDialog from './account/LoginDialog'
import AppBar from '@mui/material/AppBar';
import { IoLogoWhatsapp } from 'react-icons/Io';
import { useContext } from 'react';

import {Box, Toolbar,Typography,styled} from '@mui/material';
import { AccountContext } from '@/context/AccountProvider';
import ChatDialog from './chat/ChatDialog';
  


export default function Messenger() {
    const Header=styled(AppBar)`height:220px;
    background-color:#00a884;
    box-shadow:none;`
    const ChatHeader=styled(AppBar)`height:220px;
    background-color:#111b21;
    box-shadow:none;`
    const Component=styled(Box)`
    height:100vh;
    background-color:#111b21;
    
    `
    const { account }=useContext(AccountContext);
  return (
    <>
   <Component >

    { account ?
     <ChatHeader>
  
  <ChatDialog/>
    </ChatHeader>
 
    :
    <>
    <Header >
      <Typography className='text-[14px] font-medium text-white uppercase align-middle ml-[28px] md:ml-[100px] flex gap-2 items-center mt-[12px] md:mt-[48px]'><i > <IoLogoWhatsapp className='text-[#435a64]  border-white w-8 h-8'/></i> Whatsapp Web</Typography>
        <Toolbar>

        </Toolbar>
    </Header>
   <LoginDialog />
   </>
  }
   </Component>
   </>

  )
}
