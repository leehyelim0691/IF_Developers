import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, FormGroup, Label, Col, Row} from 'reactstrap';
import React,{useState,useEffect} from 'react';
import Element from '../components/Element';
import { FormContext } from '../FormContext';
import jsonSkeleton from '../components/elements/jsonSkeleton.json';

function Main() {
  const [clicked, setClicked] = useState(false);
  const [schema,setSchema] = useState();
  const [elements, setElements] = useState(null);
  // const [form, setForm] = useState('{\n"page_label": "이력서 Form",\
  // "fields": [{}');
  const [form, setForm] = useState('{\n"page_label": "이력서 Form",\n"fields": [\n');
  const [rSelected, setRSelected] = useState(null);
  const [cSelected, setCSelected] = useState([]);
  const [json, setJson] = useState(null);
  const [count, setCount] = useState(0);
  
  const { fields, page_label } = elements ?? {}

  useEffect(() => {
    setJson(jsonSkeleton);
  },[])
  
  const textChange = (e) => {
    setForm(e.target.value);
  }


  const onClickCreate = () => {
    var schema = document.getElementById('json-editor').value;
    console.log(schema);
    var myobj=JSON.parse(schema);
    setElements(myobj);
    setClicked(true);
  };

  const onClickCheck = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);

    if(cSelected.length!=0){
      setForm(form + "\n]}");
    }
  }

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

  const addJson = e => {
    setRSelected(e); 
    if(count == 0){
      setForm(form + JSON.stringify(json[e],null, 4));
    }
    else{
      setForm(form+","+JSON.stringify(json[e],null, 4));
    }
    setCount(count+1);
  }
    
  return (
    <FormContext.Provider value={{ handleChange }}>
    <div className="App">
      <Container>
        <FormGroup>
            <Label className="inputType">Input Type</Label>
            <Form>
              <Button outline color="danger" onClick={() => addJson(0)} active={rSelected === 0}>Text</Button>{' '}
              <Button outline color="warning" onClick={() =>addJson(1)} active={rSelected === 1}>Select</Button>{' '}
              <Button outline color="success" onClick={() =>addJson(2)} active={rSelected === 2}>Checkbox</Button>{' '}
              <Button outline color="info" onClick={() =>addJson(3)} active={rSelected === 3}>Color</Button>{' '}
              <Button outline color="primary" onClick={() =>addJson(4)} active={rSelected === 4}>Email</Button>{' '}
              <Button outline color="secondary" onClick={() =>addJson(5)} active={rSelected === 5}>Date</Button>{' '}
              <Button outline color="secondary" onClick={() =>addJson(6)} active={rSelected === 6}>Datetime</Button>{' '}
              <Button outline color="secondary" onClick={() =>addJson(7)} active={rSelected === 7}>Month</Button>{' '}
              <Button outline color="secondary" onClick={() =>addJson(8)} active={rSelected === 8}>File</Button>{' '}
              <Button outline color="secondary" onClick={() =>addJson(9)} active={rSelected === 9}>Number</Button>{' '}
              <Button outline color="secondary" onClick={() =>addJson(10)} active={rSelected === 10}>Telephone</Button>{' '}
              <Button outline color="secondary" onClick={() =>addJson(11)} active={rSelected === 11}>Range</Button>{' '}
              <hr/>
            </Form>
        </FormGroup>
      </Container>
      <div className="editor-container">
        <div className="editor-box" >
          <div className="editor-head"><h5>JSONSchema</h5></div> 
            <textarea className="json-editor" id="json-editor" value={form} onChange={textChange}>{schema}</textarea>
            <Row>
              <Col>
                <button className="btn btn-large btn-secondary create-btn" onClick={() => onClickCheck(1)} active={cSelected.includes(1)}>Check</button>
              </Col>
              <Col>
                <button className="btn btn-large btn-secondary create-btn" onClick={onClickCreate}>Create</button>
              </Col>
            </Row>
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

export default Main;