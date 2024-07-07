import React from 'react'
import LoGoImage from '../components/main/download.png'

export default function Image({image}) {
    console.log('\n ------------------ image -----------------')

    return (
            <div className='grid grid-cols-2 gap-2'>
                {
                    [1, 2, 3, 4, 5].map((img, i) => <div className='w-full h-[100px] 
                        overflow-hodden rounded-sm cursor-pointer'>
                        <img className='w-full h-full object-fill' src={LoGoImage} alt='' />
                    </div>)
                }
            </div>
    )

}