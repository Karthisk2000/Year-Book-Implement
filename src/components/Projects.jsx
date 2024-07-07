import React from 'react'
import LoGoImage from '../components/main/download.png'
import {Link} from 'react-router-dom'


export default function Projects() {
    console.log('\n -------------------- projects ------------------------')

    return (
        <div className='h-[80vh] overflow-x-auto flex justify-start items-start 
            scrollbar-hide'>
            <div className='grid grid-cols-2 gap-2'>
                {
                    [1, 2, 3, 4, 5].map((img, i) => <Link className='w-full h-[100px] 
                        overflow-hodden rounded-sm cursor-pointer'>
                        <img className='w-full h-full object-fill' src={LoGoImage} alt='' />
                    </Link>)
                }
            </div>
        </div>
    )
}