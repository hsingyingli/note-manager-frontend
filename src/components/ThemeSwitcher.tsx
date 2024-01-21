'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useTheme } from "next-themes";
import { Theme }  from '@/types/theme'
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === systemTheme ? systemTheme : theme
  const Icon = currentTheme === Theme.Dark ? SunIcon : MoonIcon

  const themeToggler = () => {
    const theme =  currentTheme === Theme.Dark ? Theme.Light : Theme.Dark
    setTheme(theme)
  }

  return (
    <Button 
      onClick={themeToggler} 
      className='dark:bg-yellow-400 dark:hover:bg-yellow-500 bg-purple-400 hover:bg-purple-500'
      size='icon'
    >
      <Icon className='w-6 h-6' />
    </Button>
  )
}

export default ThemeSwitcher
