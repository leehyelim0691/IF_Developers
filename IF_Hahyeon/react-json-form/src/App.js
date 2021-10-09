import './App.css';
import React,{useState} from 'react';
import Form from "@rjsf/core";

function App() {
  const [clicked, setClicked] = useState(false);
  const [schema,setSchema] = useState();
  const onClickEnter = () => {
    setSchema(document.getElementById('json-editor').value);
    console.log("스키마",schema);
    setClicked(true);
  };

  function NewForm() {
    var myobj=JSON.parse(schema);
   
    return(
      <Form schema={myobj}/>
    );
  }

    
    return (
      <div className="App">
        <div className="container">
          <div className="editor-box" >
            <div className="editor-head"><h5>JSONSchema</h5></div> 
            <textarea className="json-editor" id="json-editor">{schema}</textarea>
            <div>
              <button className="btn btn-large btn-secondary create-btn" onClick={onClickEnter}>Create</button>
            </div>
          </div>
          <div className="new-form">
            {clicked? {schema}===''? <div>No Content</div>:<NewForm/>:null}  
          </div> 
        </div>
      </div>
    
    );
}

export default App;

