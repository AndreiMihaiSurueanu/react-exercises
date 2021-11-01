import React from 'react'
import './Video.css'

function Video() {
    return (
        <div className='video'>
            <main>
                <h1>React Video</h1>
                <br /><br />
                <iframe title='a'
                    src="https://www.youtube.com/embed/pXRviuL6vMY" 
                    frameborder="0"
                    width='1000'
                    height={560}
                ></iframe>
                <iframe 
                title='a'
                height={530}
                src="http://tny.im/qkl" frameborder="0"></iframe>
            </main>
        </div>
    )
}

export default Video
