import React, { useContext, useState } from 'react'
import Header from './Header'
import { Box } from '@mui/material'
import Search from './Search'
import Conversation from './Conversation'


export default function Menu() {
  const[text,setText]=useState('');
  
  return (
  <Box>
    <Header/>
    <Search setText={setText} />
    <Conversation text={text}/>
  </Box>
  )
}
