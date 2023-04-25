import React, {useState} from 'react'
import {BsCheckAll} from 'react-icons/bs'
import './popup.css'

const PopUp = () => {
    const [clicked, setClicked] = useState(false)
    function handleClick() {
       return setClicked(true)
    }
  return (
    <div className='container pop__up' style={{display: clicked ? 'none' : 'block'} }>
        <BsCheckAll className='icon'/>
        <h2>Your Message has been sent, Thank You!</h2>
        <button className='btn btn-primary' onClick={handleClick}>OK</button>
    </div>
  )
}

export default PopUp