import Editor from "./components/Editor";
import Preview from "./components/Preview";
import {useState} from "react";
import styled from 'styled-components/macro'
import PlaceholderText from "./components/PlaceholderText";

function App() {

    const [editorInput, setEditorInput] = useState(PlaceholderText);

  return (
    <AppContainer>
        <Editor editorInput={editorInput} setEditorInput={setEditorInput}/>
        <Preview editorInput={editorInput}/>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
`


