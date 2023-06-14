import React, { useState } from 'react'
import Home from './pages/Home'
import '../client/assets/global.css'

function App() {
    const [text, setText] = useState('Hello world')
    return (
        <div>
            <p>Click below to check your app working on client side or not</p>
            <button onClick={() => setText('your app is working successfully on client side')}>Click Me</button>
            <b>{text}</b>
            <Home />
        </div>
    )
}

export default App