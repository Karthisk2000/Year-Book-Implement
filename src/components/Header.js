import React from 'react'
import LoGoImage from '../Login/Images/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {

    console.log('\n -------------------- header --------------------')

    const printImage = () => {
        console.log('\n ----------- order & print ----------------')
    }

    return (
        <div className='h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full'>
            <div className='flex justify-between px-10 items-center text-gray-300 h-full'>
                <Link to='/layout'>
                    <img style={{maxWidth: '50%'}} src={LoGoImage} alt='' />
                </Link>
                <span className='text-xl'>Yearbook</span>
                <div className='flex justify-center items-center gap-2 text-gray-300'>
                    <button onClick={printImage} className='px-3 py-[6px] outline-none bg-[#252627] rounded-sm'>Order & Print</button>
                </div>
            </div>
        </div>
    )

}