import PlaceholderText from "./PlaceholderText"
import styled from 'styled-components/macro'

export default function Editor({editorInput, setEditorInput}) {

    return (
        <EditorContainer>
            <BoxHead>Editor</BoxHead>
            <Input
                id="editor"
                defaultValue={PlaceholderText}
                value={editorInput}
                onChange={({target}) => setEditorInput(target.value)}
            />
        </EditorContainer>
    )
}

const EditorContainer = styled.div`
  margin: 5px;
`

const BoxHead = styled.div`
  color: "black";
  background-color: var(--light-purple);
  border: solid 4px black;
  width: 80vw;
  padding: 10px;
`

const Input = styled.textarea`
  height: 40vh;
  width: 80vw;
  margin: -4px 0 0 0;
  resize: none;
  border: solid 4px black;
  padding: 10px;
`
