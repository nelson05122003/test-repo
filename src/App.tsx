import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [bgColor, setBgColor] = useState('white');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');


  return (
    <>
      {/* BREAKING CHANGE: Complete UI overhaul with new theme system */}
      <div className="app-container" data-theme={theme}>
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
      <h2>Testing Minor Version Bump with feat:</h2>
      <p>Version display has been fixed</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Production version testing - Bug fix applied
      </p>
      <h1>Added Feature Test</h1>
      <h2>Production Feature: Enhanced User Experience</h2>
      <button onClick={() => setBgColor(bgColor === 'white' ? 'blue' : 'white')}>
        Toggle Background Color
      </button>

      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme (BREAKING CHANGE)
      </button>
      </div>

      <footer>
        {/* @ts-ignore */}
        Frontend version: v{__APP_VERSION__}
      </footer>
    </>
  )
}

export default App
// FEAT TEST
