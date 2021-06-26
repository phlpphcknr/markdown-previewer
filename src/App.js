import Editor from "./components/Editor";
import Preview from "./components/Preview";
import {useState} from "react";
import styled from 'styled-components/macro'

function App() {

    const [editorInput, setEditorInput] = useState();

  return (
    <AppContainer>
        <Editor editorInput={editorInput} setEditorInput={setEditorInput}/>
        <Preview/>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  display:flex;
  flex-direction: column;
  padding: 15px;
`
