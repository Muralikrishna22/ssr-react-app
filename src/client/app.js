import React, { useState } from 'react'
import Home from './pages/Home'
import '../client/assets/global.css'
import AppStatus from './components/AppStatus'
const Remote1Content = React.lazy(() => import('remote1/layout'));

function App() {
    const [text, setText] = useState('Hello world')

    return (
        <div>
            {/* <Remote1Content /> */}
            <AppStatus />
            <Home />
        </div>
    )
}

export default App