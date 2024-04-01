
'use client'

import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes";
import { ElementRef, useEffect, useRef, useState } from "react"

type Props = {}

function Darkmodetoggle({}: Props) {

  const [loading ,setLoading] = useState<boolean>(true)
   const ref = useRef<ElementRef<typeof Switch>>(null) ;

   const {theme ,setTheme} = useTheme() ;
   useEffect(()=>{
     setTheme('dark') ;
     setLoading(false)
   },[setTheme])

   function handleChange(){
    ref.current?.ariaChecked === 'true' ? setTheme('light') : setTheme('dark');
   }
  return (<Switch defaultChecked={true}  onClick={handleChange} ref={ref} /> ); 

}

export default Darkmodetoggle