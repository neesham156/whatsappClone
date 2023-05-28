
import { createContext, useState } from 'react'
export const AccountContext=createContext<any>(null)

export default function AccountProvider({children}:any) {
    const [account,setAccount]=useState<any>();
    const [person,setPerson]=useState<any>({});

  return (
    <AccountContext.Provider  value={{account,setAccount,person,setPerson}}>
        {children}
    </AccountContext.Provider>
   
  )
}
