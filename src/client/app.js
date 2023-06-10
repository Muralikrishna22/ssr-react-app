import React, { useState } from 'react'

function app() {
    const [text, setText] = useState('Hello world')
    return (
        <div>
            <div>{text}</div>
            <button onClick={() => setText('changed successfully')}>change text</button>
        </div>
    )
}

export default app