import React from 'react'
import { Logo } from '../logo';
import { Link } from 'react-router-dom';

type Props = {}

export function Header({}: Props) {
  return (
   <header className='w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600'>
     <Link to="/">
      <Logo />
     </Link>
   </header>
  )
}
