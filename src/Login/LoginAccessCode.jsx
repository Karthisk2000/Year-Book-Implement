import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import loGoBackground from './Images/logo.png'


export default function LoginAccessCode() {
    console.log('\n --------------------- access code ---------------------')
    const [accessCode, setAccessCode] = useState('')
    const navigate = useNavigate();

    const passCodeVerification = () => {
        console.log('\n accessCode:', accessCode)
        navigate('/email_number_verification');
    }

    return (
       <div className='login-access-code'>
            <div className="login-access-code-container">
                <img src={loGoBackground} alt="images" />
                <h1>Pictures you love of people you love</h1>
                <p>Please enter your online code:</p>
                <input value={accessCode} onChange={(e) => setAccessCode(e.target.value)} type="text" name="pass" id="pass" placeholder="Enter Pass code" />
                <br />
                <button onClick={passCodeVerification}>VIEW PORTRAITS</button>

            </div>
        </div>
    )
}

