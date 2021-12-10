import React, { createContext, useState } from 'react'


export const DarkModeContext = createContext<any>(null)
export const DarkCont = ({ children }: { children: any }) => {
    const [darkModeOn, setDarkModeOn] = useState<any>(0)
    return (
        <DarkModeContext.Provider value={[darkModeOn, setDarkModeOn]}>
            {children}
        </DarkModeContext.Provider>
    )
}
