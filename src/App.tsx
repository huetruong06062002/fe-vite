import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ComponentExample } from './examples/ComponentExample'
import ComonentExample1 from './examples/ComonentExample1'
import ComponentState from './examples/ComponentState'
import ComponentExcercise from './examples/excersicestate/ComponentExcercise'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">
        <ComponentExcercise/>
      </p>
    </div>
  )
}

export default App
