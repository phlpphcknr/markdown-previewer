import PlaceholderText from "./PlaceholderText"
import styled from 'styled-components/macro'

export default function Editor({editorInput, setEditorInput}) {

    return (
        <div id="editor">
            <BoxHead>Editor</BoxHead>
            <Input
                value={editorInput}
                onChange={({target}) => setEditorInput(target.value)}
                placeholder={PlaceholderText}
            />
        </div>
    )
}

const BoxHead = styled.p`
  border: solid 4px black;
  padding: 3px;
  width: 100%;
`

const Input = styled.input`
  height: 40vh;
  width: 100%;
  border: solid 4px black;
`