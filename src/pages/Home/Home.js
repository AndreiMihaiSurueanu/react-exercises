import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <Link to="/dynamicInputFields">Dynamic Input Fields</Link>
            <Link to="/magicPopUp">Magic React Pop-up</Link>
        </div>
    )
}

export default Home
