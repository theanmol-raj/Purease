
'use client'

import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes";
import { ElementRef, useEffect, useRef } from "react"

type Props = {}

function Darkmodetoggle({}: Props) {


   const ref = useRef<ElementRef<typeof Switch>>(null) ;

   const {theme ,setTheme} = useTheme() ;
   useEffect(()=>{
    ref.current?.ariaChecked === 'true' ? setTheme('dark') : setTheme('light');
   },[setTheme])

   function handleChange(){
    ref.current?.ariaChecked === 'true' ? setTheme('light') : setTheme('dark');
   }
  return (<Switch  onClick={handleChange} ref={ref} /> ); 

}

export default Darkmodetoggle