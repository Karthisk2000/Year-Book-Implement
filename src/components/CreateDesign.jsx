import React, {useState, useRef} from 'react'
import { useLocation } from 'react-router-dom'
import CreateComponent from './CreateComponent';

export default function CreateDesign() {
    console.log('\n -------------------- create design ------------------')
    const { state } = useLocation();
    const ref = useRef();
    console.log('\n ------------------ state', state)

    const obj = {
        name : 'main_frame',
        type : 'rect',
        id : Math.floor((Math.random() * 100) + 1),
        height : state.height,
        width : state.width,
        z_index : 1,
        color : 'green',
        image : ''
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center relative'>
            <div ref={ref} className='relative w-auto h-auto overflow-auto'>
                <CreateComponent info={obj} current_component={{}} />
            </div>
            {/* {
                loader && <div className='left-0 top-0 w-full h-full flex justify-center items-center bg-black absolute'><RotateLoader color='white' /></div>
            } */}
        </div>
    )
}