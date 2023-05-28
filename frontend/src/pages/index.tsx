import Messenger from '@/components/Messenger'
import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from '@/context/AccountProvider';

export default function index() {
  const clientId='309522282231-njnbs5e1rsd53s9o3q79c70cdbug1527.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId} >
<AccountProvider  >
      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}
