import React, { useState } from 'react'

function App() {
    const [text, setText] = useState('Hello world')
    return (
        <div>
            <div>{text}</div>
            <button onClick={() => setText('changed successfully')}>change text</button>
        </div>
    )
}

export default App