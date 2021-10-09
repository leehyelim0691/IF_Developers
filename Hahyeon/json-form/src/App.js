import './App.css';
import React,{useState} from 'react';
import Element from './components/Element';
import { FormContext } from './FormContext';

function App() {
  const [clicked, setClicked] = useState(false);
  const [schema,setSchema] = useState();
  const [elements, setElements] = useState(null);

  const { fields, page_label } = elements ?? {}

  const onClickEnter = () => {
    var schema = document.getElementById('json-editor').value;
    var myobj=JSON.parse(schema);
    setElements(myobj);
    setClicked(true);
  };

  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case 'checkbox':
            field['field_value'] = event.target.checked;
            break;

          default:
            field['field_value'] = event.target.value;
            break;
        }


      }
      setElements(newElements)
    });
    console.log(elements)
  }

    
  return (
    <FormContext.Provider value={{ handleChange }}>
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
          {clicked?
            <form>
              {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
            </form>
          :null}  
        </div> 
      </div>
    </div>
    </FormContext.Provider>
  );
}

export default App;