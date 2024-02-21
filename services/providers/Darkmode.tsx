'use client'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
 
export default function Darkmode({ children, ...props }: ThemeProviderProps) {
  return (<NextThemesProvider  {...props}>
      {children}
    </NextThemesProvider>)
}


