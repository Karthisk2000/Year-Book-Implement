import React from 'react'
import LoGoImage from './logo.png'
import flower_1 from './Fairytale Floral Bouquet Clipart 1.png'
import flower_2 from './Fairytale Floral Bouquet Clipart 2.png'
import flower_3 from './Fairytale Floral Bouquet Clipart 3.png'
import flower_4 from './Fairytale Floral Bouquet Clipart 4.png'


export default function TemplateDesign() {
    console.log('\n -------------------------- template design --------------------')

    return (
        <>
        {
            [flower_1, flower_2, flower_3, flower_4].map((flower,i)=><div className='group w-full rounded-md overflow-hidden bg
            -[#ffffff12] cursor-pointer'>
                <img className='w-full h-full rounded-md overflow-hidden hover:border-[2px]' src={flower} alt='' />
            </div>)
        }
        </>
    )

}