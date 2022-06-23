import { CaretRight, FileArrowDown, Image } from 'phosphor-react'
import React from 'react'

type Props = {
  heading: string;
  paragraph: string;
  image?: boolean;
}

export function Card(props: Props) {
  const { heading, paragraph, image } = props;

  return (
    <a href='#' className='bg-gray-700 rounded overflow-hidden flex items-center xl:items-stretch justify-between gap-6 hover:bg-gray-600 transition-colors'>
      <div className='bg-green-700 h-full ml-4 xl:ml-0 p-6 flex items-center rounded xl:rounded-none'>
       {image ? <Image size={40} /> : <FileArrowDown size={40}/>} 
      </div>
      <div className='py-6 leading-relaxed'>
        <strong className='text-2xl'>
          {heading}
        </strong>
        <p className='text-sm text-gray-200 mt-2'>
          {paragraph}
        </p>
      </div>
      <div className='h-full p-6 flex items-center'>
        <CaretRight size={24}/>
      </div>
    </a>
  );
}
