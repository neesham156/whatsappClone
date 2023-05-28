import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
import React from "react";
import Image from "next/image";
import { qrCodeImage } from "@/constants/data";
import {  GoogleLogin } from "@react-oauth/google";
import { useContext } from "react";


import jwt_decode from 'jwt-decode'
import { AccountContext } from "@/context/AccountProvider";
import { addUser } from "@/services/api";

export default function LoginDialog() {
  const {setAccount}=useContext(AccountContext);
    const Component=styled(Box)`
    display:flex;

    `
    const Container=styled(Box)`
    padding:56px 0 56px 56px;
    `
  const dialogStyle = {
    height: "92%",
    marginTop: "14%",

  
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxshadow: "none",
   
    overflow: "hidden",
   

  };
   const onLoginSuccess=async(res:any)=>{
    let decoded=jwt_decode(res.credential);
    setAccount(decoded);
    await addUser(decoded);

   

   }
   const onLoginError=(res:any)=>{
    console.log("login failed",res);

   }

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }}  hideBackdrop={true}>
        <Component  className="flex-wrap justify-center" >
          <Container >
            <Typography className="text-[26px]  text-[#525252] font-light font-[inherit] mb-[25px]">To Use WhatsApp on your computer</Typography>
            <List className="p-0 mt-[15px] font-[18px] leading-[28px] text-[#4a4a4a] ">
              <ListItem>1.Open WhatsApp on your phone</ListItem>
              <ListItem>2. Tap Menu Setting and select Whatsapp Web</ListItem>
              <ListItem>
                3.Point your phone to this screen to capture the QR code
              </ListItem>
            </List>
          </Container>
          <Box className="relative">
            <Image src={qrCodeImage} alt="qr code" width={264} height={264} className=" ml-[50px] mt-[50px]"  />
            <Box className="absolute top-[50%] left-4 translate-x-[25%]">
            <GoogleLogin
                onSuccess={onLoginSuccess} 
                onError={onLoginError}/>
            </Box>
          </Box>
        </Component>
      </Dialog>
    </>
  );
}
