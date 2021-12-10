import React, { createContext, useState } from 'react'


export const SectionContext = createContext<any>([1,0,0,0])
export const SectCont = ({ children }: { children: any }) => {
    const [section, setSection] = useState<any>([1,0,0,0])
    return (
        <SectionContext.Provider value={[section, setSection]}>
            {children}
        </SectionContext.Provider>
    )
}
