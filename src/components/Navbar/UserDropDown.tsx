'use client';

import React, {  useContext, useState } from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { UserContext } from "@/stores/contexts/UserContext"
import { cn } from "@/lib/utils";   
import { Bars3Icon } from '@heroicons/react/24/outline';
import { logoutUser } from "@/requests/public";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast"


type PopoverItem = {
  name: string, 
  url: string,
}

const popoverContent: Record<string, Array<PopoverItem>> = {
  true: [{
    name: 'Home',
    url: '/',
  }, 
  ],
  false: [{
    name: 'Home',
    url: '/'
  }, {
    name: 'Login',
    url: '/login'
  }, {
    name: 'Register',
    url: '/register',
  }]
}

const UserPopover: React.FC = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { user: { isLogin, username } } = useContext(UserContext)

  const { toast } = useToast()
  const displayList  = popoverContent[isLogin.toString()]

  const title = isLogin ? `Hi~ ${username}` : `Welcome!!`

  const { mutate } = useMutation({
    mutationFn: logoutUser,
    mutationKey: ['logout', isLogin],
    onSuccess() {
      window.location.href = "/"
      toast({
        description: `Bye-bye ${username}`,
        duration: 5000,
      })
    },
  })

  const handleOnLogout = () => {
    mutate()
  }

  return (
    <Popover open={open} onOpenChange={() => setOpen(prev => !prev)}>
      <PopoverTrigger asChild>
        <Button 
          size='icon'
        >
          <Bars3Icon className='w-6 h-6'/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="">
            <h4 className="font-medium leading-none">{title}</h4>
          </div>
          <div className="flex flex-col gap-1">
            {
              displayList.map(({name, url}) => {
                const isActive = url === '/' ? pathname === url : pathname.startsWith(url)
                return (
                  <Link key={name} onClick={() => setOpen(false)} href={url} className={cn(
                    "h-9  rounded flex items-center", {
                      'dark:bg-gray-900 bg-gray-100': isActive,
                      'hover:dark:bg-gray-900 hover:bg-gray-100': !isActive,
                    }
                  )}>
                    {name}
                  </Link>
                )
              })
            }
          </div>
          <br/>
          {
            isLogin && (
              <div>
                <Button onClick={handleOnLogout}>Logout</Button>
              </div>
            )
          }
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default UserPopover
