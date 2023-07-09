import React, { useState } from 'react'
import Home from './pages/Home'
import '../client/assets/global.css'
import AppStatus from './components/AppStatus'
import { Link } from 'react-router-dom'

function App() {
    const [text, setText] = useState('Hello world')
    return (
        <div>
            <AppStatus />
            {/* <Home /> */}
            <div>
                <h1>Welcome</h1>
                <p>ssr rendering with react 16 render to string method</p>
                <Link to={'/products'}>Go to Products Page</Link>
            </div>
        </div>
    )
}

export default App