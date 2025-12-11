import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [ bgColor, setBgColor ] = useState('white');


  return (
    <>
      {/* TEST VERSIONING: This is a feature change for UAT workflow test */}
      <div className="logo-container" style={{ backgroundColor: bgColor }}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => setBgColor(bgColor === 'white' ? 'blue' : 'white')}>
        Toggle Background Color
      </button>

      <footer>
        {/* @ts-ignore */}
        Frontend version: v{__APP_VERSION__}
      </footer>
    </>
  )
}

export default App
