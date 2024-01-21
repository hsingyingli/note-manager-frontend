"use client"

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

type Props = {
    children: string | React.ReactNode | React.JSX.Element | React.JSX.Element[];
}

const ThemeProvider = ({children} : Props) => {
  const [mounted,setMounted] = useState<boolean>(false);

  useEffect (() => {
      setMounted(true);
  },[]);

  if(!mounted){
      return <>{children}</>;
  }


  return (
    <NextThemeProvider enableSystem={true} attribute='class'>
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider
