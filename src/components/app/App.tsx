import React from 'react'

import Profit from "../profit/"
import Calculator from "../calculator"
import './App.scss'

const App: React.FC = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
                <Calculator/>
                <Profit/>
            </div>
        </div>

    )
}

export default App
