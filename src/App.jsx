import { useState } from 'react'
import { Editor } from './components/Editor'
import './App.css'
import { Previewer } from './components/Previewer'

function App() {
  const [text, setText] = useState()

  return (
    <>
      <Editor
        setText={setText}
      />
      <Previewer
        text={text}
      />
    </>
  )
}

export default App