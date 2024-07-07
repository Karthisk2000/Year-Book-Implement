import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import loGoBackground from './Images/Untitled_design__41_-removebg-preview.png'


export default function LoginEmailNumber() {
    console.log('\n --------------------- access code ---------------------')
    const[emailNumber, setEmailNumber] = useState('')
    const navigate = useNavigate(); 

    const emailNumberVerification = () => {
        console.log('\n ---------------- emailNumber:', emailNumber)
        navigate('/layout')
    }

    return (
       <div className='login-email-number'>
            <div class="login-email-number-container">
                <img src={loGoBackground} alt="Logo" />
                <p>Email or Phone number</p>
                <input value={emailNumber} onChange={(e) => setEmailNumber(e.target.value)} type="text" id="email" name="email" placeholder="Enter your email or phone number" />
                <button onClick={emailNumberVerification}>Submit</button>
            </div>
        </div>
    )
}

