import React, { useState } from 'react'
import Home from './pages/Home'
import '../client/assets/global.css'
import AppStatus from './components/AppStatus'

function App() {
    const [text, setText] = useState('Hello world')
    return (
        <div>
            <AppStatus />
            <Home />
        </div>
    )
}

export default App