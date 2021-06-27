import styled from "styled-components/macro";
import marked from "marked";

export default function Preview({editorInput}) {

    //{marked(editorInput)}

    //<h1>test</h1>
    // <h1 id="welcome-to-my-react-markdown-previewer">Welcome to my React Markdown Previewer!</h1>


    return (
        <PreviewContainer id="preview">
            <BoxHead>Preview</BoxHead>
            <Output dangerouslySetInnerHTML={{__html: marked(editorInput)}}></Output>
            {/*<Output markdown={editorInput}></Output>*/}
        </PreviewContainer>
    )
}

const PreviewContainer = styled.div`
  margin: 5px;
`

const BoxHead = styled.div`
  border: solid 4px black;
  width: 80vw;
  padding: 10px;
`

const Output = styled.div`
  height: 40vh;
  width: 80vw;
  margin: -4px 0 0 0;
  border: solid 4px black;
  padding: 10px;
`