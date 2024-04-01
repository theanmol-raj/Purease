import { createContext, useContext } from "react";

export const SidebarContext = createContext<[expanded:boolean , setExpanded : ( x: boolean) => void] | undefined>(undefined);

export function useSidebarContext(){
    const expanded = useContext(SidebarContext);
    if( expanded === undefined ) {
        throw new Error('Forgot to pass in expanded Context')
    }
    return expanded
}