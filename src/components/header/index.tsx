import React from 'react'
import { Logo } from '../logo'

type Props = {}

export function Header({}: Props) {
  return (
   <header className='w-full py-5 flex items-center justify-center'>
     <Logo />
   </header>
  )
}
