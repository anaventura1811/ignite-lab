import { DiscordLogo, Lightning } from 'phosphor-react'
import React from 'react'

interface ButtonProps {
  variants: string;
  callToAction: string;
}

function Button({ variants, callToAction }: ButtonProps) {
  
  return (
    <>
   
    {variants === "primary" ? (
      <a
        href='#'
        className='p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors'
      >
        <DiscordLogo size={24}/>
        {callToAction}
      </a>
    ) : (
      <a
        href='#'
        className='p-4 text-sm border border-blue-500 flex items-center text-blue-500 rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors'
      >
        <Lightning size={24}/>
          {callToAction}
      </a>

    )}
    
            
            </>
  )
}

export default Button