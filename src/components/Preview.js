import styled from "styled-components/macro";
import marked from "marked";

export default function Preview({editorInput}) {

    marked.setOptions({
        breaks: true,
    });

    const renderer = new marked.Renderer();

    return (
        <PreviewContainer>
            <BoxHead>Preview</BoxHead>
            <Output id="preview" dangerouslySetInnerHTML={{__html: marked(editorInput, {render: renderer})}} ></Output>
        </PreviewContainer>
    )
}

const PreviewContainer = styled.div`
  background-color: var(--light-purple);
  margin: 5px;
`

const BoxHead = styled.div`
  color: var(--purple);
  border: solid 4px black;
  width: 80vw;
  padding: 10px;
`

const Output = styled.div`
  color: var(--medium-blue);
  height: 40vh;
  width: 80vw;
  overflow-y: auto;
  margin: -4px 0 0 0;
  border: solid 4px black;
  padding: 10px;
  font-size: 16px;
  
  h1 {
    font-size: 32px;
    border-bottom: 2px solid black;
    margin: 20px 0px;
  }
  
  h2 {
    font-size: 24px;
    border-bottom: 1px solid black;
    margin: 15px 0px;
  }
  
  h3 {
    font-size: 18px;
  }
  
  p {
    font-size: inherit;
    margin: 16px 0px;
  }
  
  code {
      font-family: Monospace;
      font-size: 14px;
      padding: 3px;
      background-color: white;
  }
  
  pre {
    background-color: white;
  }
  
  strong, em, del, a {
    font-size: inherit;
  }
  
  blockquote {
    font-size: inherit;
    color: var(--purple);
    margin-left: 25px;
    padding-left: 3px;
    border-left: 3px solid var(--purple);
  }
  
  table {
    border-collapse: collapse;
    font-size: inherit;
    thead, tbody, tr {
      font-size: inherit;
    }
    th, td {
      text-align: left;
      font-size: inherit;
      border: 2px solid var(--medium-blue);
      padding: 1px 5px;
    }
  }
  
  ul {
    font-size: inherit;
    margin: 10px 30px;
    list-style-type: disc;
    li {
      font-size: inherit; 
    }
    ul {
      list-style-type: circle;
      ul {
      list-style-type: square;
      }
    }
  }
  
  ol {
    font-size: inherit;
    li {
      margin: 5px;
      font-size: inherit;
      margin-left: 30px;
    }
  }
  
  img {
    max-width: 90%;
  }
`