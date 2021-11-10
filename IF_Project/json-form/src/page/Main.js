import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, FormGroup, Label, Col, Row, View, Input} from 'reactstrap';
import { FaRedo, FaPlay } from 'react-icons/fa';
import React,{ useState, useEffect, useRef} from 'react';
import Element from '../components/Element';
import { FormContext } from '../FormContext';
import jsonSkeleton from '../components/elements/jsonSkeleton.json';
import axios from 'axios';
import {Modal, Form, Navbar} from 'react-bootstrap';
import Select from 'react-select';
import template1 from './template1.json';

function Main() {
  //template 파일 넣기,, 
  const [clicked, setClicked] = useState(false);
  const [schema,setSchema] = useState();
  const [elements, setElements] = useState(null);
  const ID = 0;
  const [form, setForm] = useState('{\n\t"page_label" : "이력서 Form",\n\t"group" : [\n\t\t{\n\t\t\t"group_name" : "Group_1",\n\t\t\t"fields" : [\n\t\t\t ]\n\t\t}\n\t]\n}');
  const [rSelected, setRSelected] = useState(null);
  const [json, setJson] = useState(null);
  const [count, setCount] = useState(0);
  const [fileName, setFileName] = useState("");
  const [description, setDescription] = useState("");
  const [groupCount, setGroupCount] = useState(2);
  const [groupElement, setGroupElement] = useState(0);
  // const { fields, page_label } = elements ?? {}
  const { group, fields, page_label } = elements ?? {}
  const [error, setError] = useState(null);
  //template 파일 넣기,, 
  const [templates,setTemplates] = useState([
  ]);

  const [Selected, setSelected] = useState("");

  React.useEffect(() => {
    axios.get('http://localhost:3002/api/read')
    //성공시 then 실행
    .then(function (response) {
      console.log(response);
      console.log(response.data)
      setTemplates(response.data);
      return {templates};
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  const LoadTemplate= (e) => {
    //template 로드 해 오기!
    var test = document.getElementsByClassName("selectTest");
    // test 변수에 selectTest란 클래스명을 가진 요소를 저장

    var indexNo = test[0].selectedIndex;
    // test 변수의 선택된 값을 indexNo에 저장

    console.log("인덱스 넘버",indexNo);
    setSelected(e.target.value);

    axios({
      method: 'post',
      url: 'http://localhost:3002/api/select',
      data: {
        fileIndex: indexNo
      }
    }).then(function (response) {
      console.log(response.data.json);
      var jsonTxt = JSON.stringify(response.data.json,null, 4);
      setForm(jsonTxt);
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    });
  }

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
    {
      id: 15,
      id_num: 1
    },
  ]);

  useEffect(() => {
    setJson(jsonSkeleton);
  },[]);
  
  const textChange = (e) => {
    setForm(e.target.value);
  }

  const handleFileName = (e) => {
    setFileName(e.target.value);
  }

  const handleDescription = (e) => {
    setDescription(e.target.value);
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

    axios({
      method: 'post',
      url: 'http://localhost:3002/api/upload',
      data: {
        json: data,
        fileName: fileName,
        description: description
      }
    }) //성공시 then 실행
    .then(function (response) {
      handleClose();
      console.log("데이터 반환 : ",response);

      setTemplates(templates.concat(fileName));
      console.log("템플릿 리스트 : ",templates)
      alert("템플릿을 저장하였습니다.");
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
    //document.body.appendChild(element); // Required for this to work in FireFox
    element.download = formObj.page_label+'.json';
    element.click();
  };

  const handleChange = (ID, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const {type, id}= field;
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
    setRSelected(e);

    if(e == 15){
      var txtArea =  document.getElementById('json-editor');
      var txtValue = txtArea.value;
      txtArea.selectionFront = selectPos;
      var selectPos = txtValue.length-5;
      var beforeTxt = txtValue.substring(0, selectPos);
      var addTxt = ',\n\t\t{\n\t\t\t"group_name" : "Group_'+groupCount+'",\n\t\t\t"fields" : [\n\t\t\t ]\n\t\t}';
      var afterTxt =   txtValue.substring(selectPos, txtValue.length);
      setForm(beforeTxt + addTxt + afterTxt);
      setGroupCount(groupCount+1);
      setGroupElement(1);
    }
    else{
      setNums( 
        nums.map(num =>
          num.id === e ? { ...num, id_num : num.id_num+1} : num
        )
      );

      nums.map(num =>
        num.id === e ? (json[e].id = json[e].type + '_' + num.id_num) : (json[e].id = json[e].id)
      );

      var jsonLength = Object.keys(json[e]).length;
      var jsonKeys = Object.keys(json[e]);
      var jsonValues = Object.values(json[e]);

      if(count == 0){
        var txtArea =  document.getElementById('json-editor');
        var txtValue = txtArea.value;
        var selectPos = txtValue.length-10;
        var beforeTxt = txtValue.substring(0, selectPos);
        var afterTxt = txtValue.substring(txtArea.selectionEnd+txtValue.length-14, txtValue.length);     
        if(afterTxt=='') afterTxt = ']}';  
        var addTxt = '\t{';
        for(var i = 0; i < jsonLength; i++){
          if(i==jsonLength-1) addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'"\n';
          else addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'",';
        }
        addTxt = addTxt + '\t\t\t\t}\n';
        var jsonContent = JSON.stringify(json[e],null,4);
        setForm(beforeTxt + addTxt +afterTxt);

        txtArea.value = beforeTxt + addTxt + afterTxt;
        txtArea.selectionEnd = selectPos;
      }
      else{
        var txtArea =  document.getElementById('json-editor');
        var txtValue = txtArea.value;
        var selectPos = txtArea.selectionStart; 
        var check;
        if(selectPos=='') {
          selectPos = txtValue.length-10;
          check = 1;
        }
        if(txtValue.substring(selectPos-1,selectPos)=='}' || txtValue.substring(selectPos-2,selectPos-1)=='['){
          var beforeTxt = txtValue.substring(0, selectPos); 
          var afterTxt = txtValue.substring(txtArea.selectionEnd, txtValue.length);  
          var afterTxt = txtValue.substring(txtValue.length-15, txtValue.length);    
          if(groupElement == 1) var addTxt = '\t{';
          else var addTxt = '\n\t\t\t\t,{';
          for(var i = 0; i < jsonLength; i++){
            if(i==jsonLength-1) addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'"\n';
            else addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'",';
          }
          addTxt = addTxt + '\t\t\t\t}';
          setForm(beforeTxt + addTxt + afterTxt);
          txtArea.value = beforeTxt + addTxt + afterTxt;
          selectPos = selectPos + addTxt.length;
          txtArea.selectionEnd = selectPos; 
        }
        else{
          var beforeTxt = txtValue.substring(0, txtValue.length-10);
          if(check==1) var afterTxt='\n\t\t\t]\n\t\t}\n\t]\n}';
          else var afterTxt = txtValue.substring(txtValue.length-15, txtValue.length);    
          if(groupElement == 1) var addTxt = '\t{';
          else var addTxt = '\t,{';
          for(var i = 0; i < jsonLength; i++){
            if(i==jsonLength-1) addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'"\n';
            else addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'",';
          }
          addTxt = addTxt + '\t\t\t\t}';
          setForm(beforeTxt  +addTxt +afterTxt);
          txtArea.value = beforeTxt + addTxt + afterTxt;
          selectPos = selectPos + addTxt.length;
          txtArea.selectionEnd = selectPos; 
        }
      }
      setCount(count+1);
      setGroupElement(0);
    }
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <FormContext.Provider value={{ handleChange }}>
    <div className="App">
    <Navbar bg="light" expand="lg" className="p-3">
          <Navbar.Brand className="h1 ml-5">2021 Bizflow Project</Navbar.Brand>
        </Navbar>
      <Container>
        <FormGroup className="mt-3">
            <Label className="mb-3 inputType">Select the Form Element you want to create</Label>
            <Form className="mb-3">
              <Button outline color="danger" onClick={() => addJson(15)} active={rSelected === 15}>Group</Button>{' '}
              <Button outline color="primary" onClick={() => addJson(0)} active={rSelected === 0}>Text</Button>{' '}
              <Button outline color="primary" onClick={() =>addJson(4)} active={rSelected === 4}>Email</Button>{' '}
              <Button outline color="primary" onClick={() =>addJson(10)} active={rSelected === 10}>Telephone</Button>{' '}
              <Button outline color="primary" onClick={() =>addJson(12)} active={rSelected === 12}>Textarea</Button>{' '}
              <Button outline color="success" onClick={() =>addJson(1)} active={rSelected === 1}>Select</Button>{' '}
              <Button outline color="success" onClick={() =>addJson(2)} active={rSelected === 2}>Checkbox</Button>{' '}
              <Button outline color="success" onClick={() =>addJson(13)} active={rSelected === 13}>Radio</Button>{' '}
              <Button outline color="success" onClick={() =>addJson(9)} active={rSelected === 9}>Number</Button>{' '}
              <Button outline color="info" onClick={() =>addJson(5)} active={rSelected === 5}>Date</Button>{' '}
              <Button outline color="info" onClick={() =>addJson(6)} active={rSelected === 6}>Datetime</Button>{' '}
              <Button outline color="info" onClick={() =>addJson(7)} active={rSelected === 7}>Month</Button>{' '}
              <Button outline color="warning" onClick={() =>addJson(3)} active={rSelected === 3}>Color</Button>{' '}
              <Button outline color="warning" onClick={() =>addJson(8)} active={rSelected === 8}>File</Button>{' '}
              <Button outline color="warning" onClick={() =>addJson(11)} active={rSelected === 11}>Range</Button>{' '}
              <Button outline color="danger" onClick={() =>addJson(14)} active={rSelected === 14}>Button</Button>{' '} 
            </Form>
        </FormGroup>
        <Label className="mb-3 inputType">Select your template</Label>
          <Row className="mb-4">
<<<<<<< HEAD
            <Col>
              <Select 
=======
            <Col className="col-md-11">
              {/* <Select 
>>>>>>> 355123dfd96b494a536f3e134c762cae4c578df9
              options={templates}
              onChange={() => LoadTemplate(templates)}
              /> */}
              <select className = "selectTest" onChange = {LoadTemplate} value={Selected}>
                {templates.map((item,index)=>(
                  <option value ={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Col>
          </Row>

      </Container>
      <div className="editor-container">
        <div className="editor-box" >
          <div className="editor-head d-flex justify-content-between p-2" >
            <Button className="button-reset" aria-label="Reset" onClick={() => {onClickReset()}}><FaRedo /></Button>
            <h5>JSONSchema</h5>
            <Button className="button-run" aria-label="Run" onClick={() => {onClickCreate()}}><FaPlay /></Button>
          </div> 
            <textarea className="json-editor" id="json-editor" value={form} onChange={textChange}>{schema}</textarea>
          </div>
          <div className="form-box"> 
            <div className="new-form">
              <h3>{page_label}</h3>
              {clicked?
              <form>
                 {group.map((group, key) => {
                   return(
                    <div key={key}>
                    <div class="mx-4 my-2 mt-3" >
                    <label class="form-label font-weight-bold">{group.group_name}</label>
                    <div class="p-3 row border">
                      <Row>
                        {group.fields ? group.fields.map((field, i) => <Element key={i} field={field}/>) : null}
                      </Row>
                      </div>
                   </div>
                    </div>
                   );
                    })}
              </form>
              :null} 
            </div> 
            <Row>
              <Col>
              <button className="btn btn-large btn-secondary create-btn" onClick={handleShow}>Save</button>
               {/* <button className="btn btn-large btn-secondary create-btn" onClick={() => {onClickSave()}}>Save</button>*/}
              </Col>
              <Col>
                <button className="btn btn-large btn-secondary create-btn" onClick={onClickDownload}>Download</button>
              </Col>
            </Row>
        </div>
    </div>
     <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Json 파일 저장하기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Template Name</Form.Label>
        <Input type="text" placeholder="저장할 파일의 이름을 입력하세요." value={fileName} onChange={handleFileName}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTextarea">
        <Form.Label>Template Description</Form.Label>
        <Input type="textarea" rows="3" placeholder="설명을 입력하세요." value={description} onChange={handleDescription} />
      </Form.Group>
        </Form> 
        </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button color="primary" variant="primary" onClick={onClickSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  </FormContext.Provider>
  );
}

export default Main;


// tabCont: (
//   <div>
//     <h4 class="text-center my-3">Layout Version 1</h4>
//     <hr></hr>
//     <div className="new-form" >
//       {clicked ?
//         <form>
//           {group.map((group, key) => {
//             return (
//               <div key={key}>
//                 <div class="mx-4 my-2">
//                 </div>
//                 <div class="row m-3 h-auto border">
//                   {group.fields ? group.fields.map((field, i) => <Element key={i} field={field} />) : null}
//                 </div>
//               </div>
//             );
//           })}
//         </form>
//         : null}
//     </div>
//   </div>
// )