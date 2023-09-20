import { useEffect, useState } from 'react'
import { Editor } from './components/Editor'
import './App.css'
import { Previewer } from './components/Previewer'

function App() {
  const [text, setText] = useState()

  useEffect(() => {
    setText(`# Welcome to my React Markdown Previewer!`)
  }, [])
  
  return (
    <>
      <Editor
        text={text}
        setText={setText}
      />
      <Previewer
        text={text}
      />
    </>
  )
}

export default App
