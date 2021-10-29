import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, FormGroup, Label, Col, Row} from 'reactstrap';
import React,{ useState, useEffect, useRef} from 'react';
import Element from '../components/Element';
import { FormContext } from '../FormContext';
import jsonSkeleton from '../components/elements/jsonSkeleton.json';
import axios from 'axios';

function Main() {
  const [clicked, setClicked] = useState(false);
  const [schema,setSchema] = useState();
  const [elements, setElements] = useState(null);
  const ID = 0;
  const [form, setForm] = useState('{\n"page_label": "이력서 Form",\n"fields": [\n ]}');
  const [rSelected, setRSelected] = useState(null);
  const [json, setJson] = useState(null);
  const [count, setCount] = useState(0);
  const { fields, page_label } = elements ?? {}
  const [nums, setNums] = useState([
    {
      id: 0,
      id_num: 1
    },
    {
      id: 1,
      id_num: 1
    },
    {
      id: 2,
      id_num: 1
    },
    {
      id: 3,
      id_num: 1
    },
    {
      id: 4,
      id_num: 1
    },
    {
      id: 5,
      id_num: 1
    },
    {
      id: 6,
      id_num: 1
    },
    {
      id: 7,
      id_num: 1
    },
    {
      id: 8,
      id_num: 1
    },
    {
      id: 9,
      id_num: 1
    },
    {
      id: 10,
      id_num: 1
    },
    {
      id: 11,
      id_num: 1
    },
    {
      id: 12,
      id_num: 1
    },
    {
      id: 13,
      id_num: 1
    },
    {
      id: 14,
      id_num: 1
    },
    
  ]);

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


  const onClickReset = () => {
    setForm('{\n"page_label": "이력서 Form",\n"fields": [\n ]}');
    setCount(0);
  };

  const onClickSave = () => {
    console.log(form);
    var data=JSON.parse(form);
    console.log(data);
    axios.post('http://localhost:3000/Form',data)
    //성공시 then 실행
    .then(function (response) {
      console.log(response);
      alert("데이터를 저장하였습니다.");
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    });
  };

  const onClickDownload = () => {
    var formObj=JSON.parse(form);
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('json-editor').value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = formObj.page_label+".txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const handleChange = (ID, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const { type, id } = field;
      if (ID === id) {
        switch (type) {
          case 'checkbox':
            field['value'] = event.target.checked;
            break;

          default:
            field['value'] = event.target.value;
            break;
        }
      }
      setElements(newElements)
    });
    console.log(elements)
  }

  const addJson = e => {
    setNums(
      nums.map(num =>
        num.id === e ? { ...num, id_num : num.id_num+1} : num
      )
    );

    nums.map(num =>
      num.id == e ? (json[e].id = json[e].type + '_' + num.id_num) : (json[e].id = json[e].id)
    );

    setRSelected(e);

    if(count == 0){
      var txtArea =  document.getElementById('json-editor');
      var txtValue = txtArea.value;
      var selectPos = txtValue.length-2;
      var beforeTxt = txtValue.substring(0, selectPos);
      var afterTxt = txtValue.substring(txtArea.selectionEnd+txtValue.length-2, txtValue.length);       
      var addTxt = JSON.stringify(json[e],null, 4) + '\n';
      setForm(beforeTxt + addTxt + afterTxt);
      txtArea.value = beforeTxt + addTxt + afterTxt;
      selectPos = selectPos + addTxt.length;
      txtArea.selectionEnd = selectPos;
    }
    else{
      var txtArea =  document.getElementById('json-editor');
      var txtValue = txtArea.value;
      var selectPos = txtArea.selectionStart; 
      if(txtValue.substring(selectPos-1,selectPos)=='[' || txtValue.substring(selectPos-2,selectPos-1)=='['){
        var beforeTxt = txtValue.substring(0, selectPos); 
        var afterTxt = txtValue.substring(txtArea.selectionEnd, txtValue.length);  
        var addTxt = '\n' + JSON.stringify(json[e],null, 4) + ',';
        setForm(beforeTxt + addTxt + afterTxt);
        txtArea.value = beforeTxt + addTxt + afterTxt;
        selectPos = selectPos + addTxt.length;
        txtArea.selectionEnd = selectPos; 
      }
      else{
        var beforeTxt = txtValue.substring(0, selectPos);  
        var afterTxt = txtValue.substring(txtArea.selectionEnd, txtValue.length); 
        var addTxt = ',' + JSON.stringify(json[e],null, 4)+ '\n'; 
        setForm(beforeTxt + addTxt + afterTxt);
        txtArea.value = beforeTxt + addTxt + afterTxt;
        selectPos = selectPos + addTxt.length;
        txtArea.selectionEnd = selectPos; 
      }
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
              <Button outline color="secondary" onClick={() =>addJson(12)} active={rSelected === 12}>Textarea</Button>{' '}
              <Button outline color="secondary" onClick={() =>addJson(13)} active={rSelected === 13}>Radio</Button>{' '}
              <Button outline color="secondary" onClick={() =>addJson(14)} active={rSelected === 14}>Button</Button>{' '}
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
              <button className="btn btn-large btn-secondary create-btn" onClick={() => {onClickReset()}}>Reset</button>              
              </Col>
              <Col>
                <button className="btn btn-large btn-secondary create-btn" onClick={() => {onClickCreate()}}>Create</button>
              </Col>
            </Row>
          </div>
          <div className="form-box"> 
            <div className="new-form">
              <h3>{page_label}</h3>
              {clicked?
              <form>
                <Row>
                {fields ? fields.map((field, i) => <Element key={i} field={field}/>) : null}
                </Row>
              </form>
              :null}  
            </div> 
            <Row>
              <Col>
              <button className="btn btn-large btn-secondary create-btn" onClick={() => {onClickSave()}}>Save</button>              
              </Col>
              <Col>
                <button className="btn btn-large btn-secondary create-btn" onClick={() => {onClickDownload()}}>Download</button>
              </Col>
            </Row>
        </div>
      </div>
    </div>  
    </FormContext.Provider>
  );
}

export default Main;