import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { BsGrid1X2, BsFillImageFill, BsFolder } from 'react-icons/bs'
import { TfiText } from 'react-icons/tfi'
import { FaCloudUploadAlt, FaShapes } from 'react-icons/fa'
import { RxTransparencyGrid } from 'react-icons/rx'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import TemplateDesign from '../components/main/TemplateDesign'
import MyImages from '../components/MyImages'
import Projects from '../components/Projects'
import Image from '../components/Image'
import background from '../components/main/background.jpg'
import background_two from '../components/main/background_two.jpg'
import CreateComponent from '../components/CreateComponent'
import background_1 from '../components/main/Summer Bokeh Background 1.jpg'
import background_2 from '../components/main/Summer Bokeh Background 2.jpg'
import background_3 from '../components/main/Summer Bokeh Background 5.jpg'
import background_4 from '../components/main/Summer Bokeh Background 6.jpg'

export default function Main() {
    // console.log("\n -------------------- main --------------------")

    const [currentComponent, setCurrentComponent] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState('');
    const [rotate, setRotate] = useState(0);
    const [left, setLeft] = useState('');
    const [top, setTop] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [opacity, setOpacity] = useState('');
    const [zIndex, setzIndex] = useState('');

    const [padding, setPadding] = useState('')
    const [font, setFont] = useState('');
    const [weight, setWeight] = useState();


    const [state, setState] = useState('');
    const [show, setShow] = useState({
        status: true,
        name: ''
    });

    const setElements = (type, name) => {
        setState(type)
        setShow({
            state: false,
            name
        })
    }


    const moveElement = (id, currentInfo) => {
        setCurrentComponent(currentInfo)
        let isMoving = true;
        const currentDiv = document.getElementById(id)
        const mouseMove = ({movementX, movementY}) => {
            const getStyle = window.getComputedStyle(currentDiv)
            console.log('\n getStyle.left', typeof(getStyle.left))
            console.log('\n parseInt(getStyle.left)', typeof(parseInt(getStyle.left)))
            const left = parseInt(getStyle.left)
            const top = parseInt(getStyle.top)
            if (isMoving) {
                currentDiv.style.left = `${left + movementX}px`
                currentDiv.style.top = `${top + movementY}px`
                
            }

        }

        const mouseUp = (e) => {
            console.log('\n ----------------- mouse up ---------------------')
            isMoving = false;
            window.removeEventListener('mousemove', mouseMove)
            window.removeEventListener('mouseup', mouseUp)
            setLeft(parseInt(currentDiv.style.left))
            setTop(parseInt(currentDiv.style.top))
        }

        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mouseup', mouseUp)
    }

    const resizeElement = (id, currentInfo) => {
        console.log('\n ---------------- resize element -------------------')
        setCurrentComponent(currentInfo)
        let isMoving = true
        const currentDiv = document.getElementById(id)
        const mouseMove = ({movementX, movementY}) => {
            const getStyle = window.getComputedStyle(currentDiv)
            const width = parseInt(getStyle.width)
            const height = parseInt(getStyle.height)
            if (isMoving) {
                currentDiv.style.width = `${width + movementX}px`
                currentDiv.style.height = `${height + movementY}px`
            }
        }
        const mouseUp = (e) => {
            console.log('\n ----------------- mouse up ---------------------')
            isMoving = false
            window.removeEventListener('mousemove', mouseMove)
            window.removeEventListener('mouseup', mouseUp)
            setWidth(parseInt(currentDiv.style.width))
            setHeight(parseInt(currentDiv.style.height))
        }
        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mouseup', mouseUp)
        // currentDiv.ondragstart = function () {
        //     return false;
        // };
    }


     
    const rotateElement = (id, currentInfo) => {
        console.log('\n ---------------- rotate element -----------------')
        setCurrentComponent('')
        setCurrentComponent(currentInfo)
        const target = document.getElementById(id)
        const mouseMove = ({ movementX, movementY }) => {
            const getStyle = window.getComputedStyle(target)
            const trans = getStyle.transform
            console.log('\n ----------------------- transsssssssssssssssssss', trans)
            console.log("trans.split('(')[1] >>>>>>>>>>>>>", trans.split('(')[1])
            const values = trans.split('(')[1].split(')')[0].split(',') 
            console.log('\n values >>>>>>>>>>>>>>>>>>>>> values', values)
            const angle = Math.round(Math.atan2(values[1], values[0]) * (180/Math.PI))
            console.log('\n angle', angle)
            let deg = angle < 0 ? angle + 360 : angle
            if (movementX) {
                deg = deg + movementX
                console.log('deg >>>>>>>>>>>>>>>>>>', deg)
            }

            target.style.transform = `rotate(${deg}deg)`
            // setRotate(deg)
        }
        const mouseUp = (e) => {
            window.removeEventListener('mousemove', mouseMove)
            window.removeEventListener('mouseup', mouseUp)
            const getStyle = window.getComputedStyle(target)
            const trans = getStyle.transform
            console.log('\n ----------------------- transsssssssssssssssssss', trans)
            console.log("trans.split('(')[1] >>>>>>>>>>>>>", trans.split('(')[1])
            const values = trans.split('(')[1].split(')')[0].split(',') 
            console.log('\n values >>>>>>>>>>>>>>>>>>>>> values', values)
            const angle = Math.round(Math.atan2(values[1], values[0]) * (180/Math.PI))
            console.log('\n angle', angle)
            let deg = angle < 0 ? angle + 360 : angle
            setRotate(deg)

            

        }

        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mouseup', mouseUp)


    }

    const [components, setComponents] = useState([
        {
            name: 'main_frame',
            type: 'rect',
            id: Math.floor((Math.random() * 100) + 1),
            height: 450,
            width: 380,
            z_index: 1,
            color: '#fff',
            image: '',
            setCurrentComponent: (a) => setCurrentComponent(a)
        }
    ])






    const removeComponent = (id) => {
        console.log('\n --------------- remove component ---------------------')
        const temp = components.filter(c => c.id !== id)
        console.log('\n temptemptemptemptemptemp', temp)
        setCurrentComponent('')
        setComponents(temp)
    }

    const removeBackground = () => {
        console.log('\n ----------------------- remove background --------------------')
        const com = components.find(c=>c.id === currentComponent.id)
        const temp = components.filter(c => c.id !== currentComponent.id)
        com.image = ''
        setImage('')
        setComponents([...temp, com])

    } 

    const opacityHandle = (e) => {
        console.log('\n ------------------ opacity handle --------------------- ')
        setOpacity(parseFloat(e.target.value))
    }

    const createShape = (name, type) => {
        console.log('\n ------------ components', components)
        const style = {
            id : components.length + 1,
            name : name,
            type,
            left : 10,
            top : 10,
            opacity : 1,
            width : 200,
            height : 150,
            rotate,
            z_index : 2,
            color : '#3c3c3d',
            setCurrentComponent : (a) => setCurrentComponent(a),
            removeBackground : ()=> setImage(''),
            moveElement,
            resizeElement,
            rotateElement,
        }
        // setCurrentComponent(style)
        setComponents([...components, style])
    }

    const add_text = (name, type) => {
        console.log('\n <------------------------ add text ------------------------->')
        const style = {
            id : components.length + 1,
            name : name,
            type,
            left : 10,
            top : 10,
            opacity : 1,
            rotate,
            z_index : 10,
            padding : 6,
            font : 22,
            title : 'Add text',
            weigth : 400, 
            color : '#3c3c3d',
            setCurrentComponent : (a) => setCurrentComponent(a),
            moveElement,
            resizeElement,
            rotateElement,
        }
        
        setWeight('')
        setFont('')
        setCurrentComponent(style)
        setComponents([...components, style])
         

    }




    // console.log('\n <---------------- current component--------------------->', currentComponent)

    useEffect(() => {
        if (currentComponent) {
            const index = components.findIndex(c => c.id === currentComponent.id)
            const temp = components.filter(c => c.id !== currentComponent.id)
            if (currentComponent.name !== 'text') {
                components[index].width = width || currentComponent.width
                components[index].height = height || currentComponent.height
                components[index].rotate = rotate || currentComponent.rotate
            }
            if (currentComponent.name === 'main_frame' && image) {
                components[index].image = image || currentComponent.image
            }
            components[index].color = color || currentComponent.color
            if (currentComponent.name !== 'main_frame') {
                components[index].left = left || currentComponent.left
                components[index].top = top || currentComponent.top
                components[index].opacity = opacity || currentComponent.opacity
                components[index].z_index = zIndex || currentComponent.z_index
            }
            setComponents([...temp, components[index]])

            setColor('')
            setWidth('')
            setHeight('')
            setTop('')
            setLeft('')
            setRotate(0)
            setOpacity('')
            setzIndex('')

        }
    }, [color, image, left, top, width, height, opacity, zIndex])




    return (
        <div className='min-w-screen h-screen bg-black' style={{ background: 'rgba(229, 231, 247, 0.77)' }}>

            {/* <div className='min-w-screen h-screen bg-black'> */}
            <Header />
            <div className='flex h-[calc(100%-60px)] w-screen'>

                <div className='w-[80px] bg-[#18191B] z-50 h-full text-gray-400 overflow-y-auto'>

                    <div onClick={() => setElements('design', 'design')} className={`${show.name ===
                        'design' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><BsGrid1X2 /></span>
                        <span className='text-xs font-medium'>Design</span>
                    </div>

                    <div onClick={() => setElements('shape', 'shape')} className={`${show.name === 'shape' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><FaShapes /></span>
                        <span className='text-xs font-medium'>Shapes</span>
                    </div>

                    <div onClick={() => setElements('image', 'uploadImage')} className={`${show.name === 'uploadImage' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><FaCloudUploadAlt /></span>
                        <span className='text-xs font-medium'>Upload</span>
                    </div>

                    <div onClick={() => setElements('text', 'text')} className={`${show.name === 'text' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><TfiText /></span>
                        <span className='text-xs font-medium'>Text</span>
                    </div>

                    <div onClick={() => setElements('project', 'projects')} className={`${show.name === 'projects' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><BsFolder /></span>
                        <span className='text-xs font-medium'>Project</span>
                    </div>

                    <div onClick={() => setElements('initImage', 'images')} className={`${show.name === 'images' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><BsFillImageFill /></span>
                        <span className='text-xs font-medium'>Images</span>
                    </div>

                    <div onClick={() => setElements('background', 'background')} className={`${show.name === 'background' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><RxTransparencyGrid /></span>
                        <span className='text-xs font-medium'>Background</span>
                    </div>

                </div>

                <div className='h-full w-[calc(100%-75px)]'>
                    <div className={`${show.status ? 'p-0 -left-[350px]' : 'px-8 left-[75px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}>
                        <div onClick={() => setShow({ name: '', status: true })} className='flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full' >
                            < MdKeyboardArrowLeft />
                        </div>

                        {
                            state === 'design' && <div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <TemplateDesign />
                                </div>
                            </div>
                        }
                        {
                            state === 'shape' && <div className='grid grid-cols-3 gap-2'>
                                <div onClick={() => createShape('shape', 'rect')} className='h-[90px] bg-[#3c3c3d] cursor-pointer'></div>
                                <div onClick={() => createShape('shape', 'circle')} className='h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full'></div>
                                <div onClick={() => createShape('shape', 'trangle')} style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }} className='h-[90px] bg-[#3c3c3d] cursor-pointer'></div>
                            </div>
                        }
                        {
                            state === 'image' && <MyImages />
                        }
                        {
                            state === 'text' && <div>
                                <div className='grid grid-cols-1 gap-2'>
                                    <div onClick={() => add_text('text', 'title')} className='bg-[#3c3c3d] cursor-pointer font-bold p-3 text-white text-xl rounded-sm'>
                                        <h2>Add a Text</h2>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            state === 'project' && <Projects />
                        }
                        {
                            state === 'initImage' && <div className='h-[80vh] overflow-x-auto flex justify-start items-start 
                            scrollbar-hide'>
                                <Image />
                            </div>
                        }
                        {
                            state === 'background' && <div className='h-[80vh] overflow-x-auto flex justify-start items-start 
                            scrollbar-hide'>
                                <div className='grid grid-cols-2 gap-2'>
                                    {
                                        [background, background_two, background_1, background_2, background_3, background_4].map((img, i) => <div onClick={() => setImage(img)} key={i} className='w-full h-[100px] 
                                            overflow-hodden rounded-sm cursor-pointer'>
                                            <img className='w-full h-full object-fill' src={img} alt='image' />
                                        </div>)
                                    }
                                </div>
                            </div>
                        }
                    </div>

                    <div className='w-full flex h-full'>
                        <div className={`flex justify-center relative items-center h-full 
                        ${!currentComponent ? 'w-full' : "w-[calc(100%-250px)] overflow-hidden"}`}>
                            <div className='m-w-[650px] m-h-[480px] flex justify-center 
                            items-center overflow-hidden'>
                                <div id='main_design' className='w-auto relative h-auto overflow-hidden'>
                                    {   
                                        // console.log('\n components ..............', components)
                                        components.map((c, i) => <CreateComponent key={i}
                                            info={c} current_component={currentComponent}
                                            removeComponent={removeComponent} />)
                                    }
                                </div>
                            </div>
                        </div>

                        

                        {
                            currentComponent && <div className='h-full w-[250px] 
                            text-gray-300 bg-[#252627] px-3 py-2'>
                                <div className='flex gap-6 flex-col items-start h-full px-3
                                justify-start'  >
                                    <div className='flex gap-4 justify-start items-start mt-4'>
                                        <span>Color : </span>
                                        <label className='w-[30px] h-[30px] cursor-pointer 
                                        rounded-ms' style={{
                                                background: `${currentComponent.color &&
                                                    currentComponent.color !== '#fff' ? currentComponent.color : 'gray'}`
                                            }}
                                            htmlFor='color' ></label>
                                        <input onChange={(e) => setColor(e.target.value)} type='color' className='invisible' id='color' />
                                    </div>
                                    {
                                        (currentComponent.name === 'main_frame' && 
                                        image) && <div>
                                        <button className='p-[6px] bg-slate-700 text-white 
                                        rounded-sm' onClick={removeBackground}>Remove background</button>
                                        </div>
                                    }


                                    {
                                        currentComponent.name !== 'main_frame' && <div 
                                        className='flex gap-6 flex-col' >
                                            <div className='flex gap-1 justify-start item-start' >
                                                <span className='text-md w-[70px]'>Opacity 
                                                : </span>
                                                <input onChange={opacityHandle} 
                                                className='w-[70px] border border-gray-700
                                                bg-transparent outline-none px-2 
                                                rounded-md' type='number' step={0.1} min={0.1} max={1}
                                                value={currentComponent.opacity} />
                                            </div>
                                            <div className='flex gap-1 justify-start item-start' >
                                                <span className='text-md w-[70px]'>Z-Index 
                                                : </span>
                                                <input onChange={(e)=>setzIndex(parseInt
                                                (e.target.value)) } className='w-[70px] 
                                                border border-gray-700 bg-transparent 
                                                outline-none px-2 rounded-md' type='number' 
                                                step={1} value={currentComponent.z_index} />
                                            </div>
                                            {
                                                currentComponent.name ==='text' && <>
                                                    <div className='flex gap-1 justify-start item-start' >
                                                        <span className='text-md w-[70px]'>
                                                        Padding : </span>
                                                        <input onChange={(e)=>setzIndex(parseInt
                                                        (e.target.value)) } className='w-[70px] 
                                                        border border-gray-700 bg-transparent 
                                                        outline-none px-2 rounded-md' type='number' 
                                                        step={1} value={currentComponent.z_index} />
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    }    
                                </div>
                            </div>
                        }
                    </div>
                    {/* <div className="add-page-container">
      <button onClick={addPage} className="p-3 bg-blue-500 text-white rounded">
        Add Page
      </button>
    </div> */}
                </div>
            </div>
        </div>
    )
}