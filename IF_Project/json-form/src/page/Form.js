import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Start.css';
import '../css/Form.css';
import { FormContext } from '../FormContext';

import { Container, Button, FormGroup, Label, Col, Row, View, Input} from 'reactstrap';

import React,{ useState, useEffect, useRef} from 'react';
import jsonSkeleton from '../components/elements/jsonSkeleton.json';
import axios from 'axios';
import Element from '../components/Element';
import { FaRedo, FaPlay,FaMousePointer, FaBookmark } from 'react-icons/fa';
import {Modal, Form, Navbar} from 'react-bootstrap';

function FormPage() { 

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
  const { group, fields, page_label } = elements ?? {}
  const [error, setError] = useState(null);
  //template 파일 넣기,, 
  const [templates,setTemplates] = useState([]);
  const [element_hidden, setelementHidden] = useState(false); 
  const [template_hidden, settemplateHidden] = useState(true); 

  React.useEffect(() => {
    axios.get('http://localhost:3002/api/read')
    //성공시 then 실행
    .then(function (response) {
      console.log(response);
      
      
      console.log("response data", response.data);

      var Filename = [];
      var temp = [];

      response.data.forEach(function (item) {
        console.log(item);
        Filename = item.split('.');
        console.log(Filename);
        console.log(Filename[0]);
        temp.push(Filename[0]);

      });
      console.log(templates);

      setTemplates(temp);
      console.log("templates:" ,templates);

      return {templates};
     
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  const LoadTemplate= (e) => {
    var file_index = e.target.value;
    console.log(e.target.value);

    axios({
      method: 'post',
      url: 'http://localhost:3002/api/select',
      data: {
        fileIndex: file_index
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
    setForm('{\n\t"page_label" : "이력서 Form",\n\t"group" : [\n\t\t{\n\t\t\t"group_name" : "Group_1",\n\t\t\t"fields" : [\n\t\t\t ]\n\t\t}\n\t]\n}');
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

      // var temp = [];
      // temp = [...response.data];
      handleClose();
      console.log("데이터 반환 : ",response);

      console.log("filename = ", fileName);

      var Filename = [];
      var temp = [];

      response.data.fileList.forEach(function (item) {
        console.log(item);
        Filename = item.split('.');
        console.log(Filename);
        console.log(Filename[0]);
        temp.push(Filename[0]);

      });

      setTemplates(temp);
      console.log("templates:" ,templates);


  
      // // response.data.push(fileName)
      // setTemplates(response.data.fileList);

      
      // expected output: "fox"
      console.log("템플릿 리스트 : ",templates)
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
      console.log(json[e]);
      var txtArea =  document.getElementById('json-editor');
      var txtValue = txtArea.value;
      txtArea.selectionEnd = selectPos;
      
      if(e===1 || e===13){

        if(txtArea.selectionEnd != 0){
          var beforeTxt = txtValue.substring(0, txtArea.selectionEnd);
           var afterTxt = txtValue.substring(txtArea.selectionEnd, txtValue.length);
           if(afterTxt=='') afterTxt = ']}';  
           if(count == 0) var addTxt = '\n\t\t\t\t{';
           else var addTxt = '\n\t\t\t\t,{';
        }
        else{
          if(txtValue.substring(selectPos-1,selectPos)=='[' || txtValue.substring(selectPos-2,selectPos-1)=='['){
            var beforeTxt = txtValue.substring(0, selectPos); 
            var afterTxt = txtValue.substring(txtArea.selectionEnd, txtValue.length);  
            var afterTxt = txtValue.substring(txtValue.length-15, txtValue.length);    
            var addTxt = '\n\t\t\t\t{';
          }
          else if(count == 0){
            var selectPos = txtValue.length-10;
            var beforeTxt = txtValue.substring(0, selectPos);
            var afterTxt = txtValue.substring(txtArea.selectionEnd+txtValue.length-14, txtValue.length); 
            if(afterTxt=='') afterTxt = ']}';  
            var addTxt = '\t{';
          }
          else if(groupElement == 1){
            var selectPos = txtValue.length-10;
            var beforeTxt = txtValue.substring(0, selectPos);
            var afterTxt = txtValue.substring(selectPos, txtValue.length); 
            var addTxt = '\t{';
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
            }
            else{
              var beforeTxt = txtValue.substring(0, txtValue.length-10);
              if(check==1) var afterTxt='\n\t\t\t]\n\t\t}\n\t]\n}';
              else var afterTxt = txtValue.substring(txtValue.length-14, txtValue.length);    
              if(groupElement == 1) var addTxt = '\t{';
              else var addTxt = '\t,{';
            }
          }
        }
 
        // var beforeTxt = txtValue.substring(0, txtArea.selectionEnd);
        // var afterTxt = txtValue.substring(txtArea.selectionEnd, txtValue.length);
        // if(afterTxt=='') afterTxt = ']}';  
        // if(count == 0) var addTxt = '\n\t\t\t\t{';
        //  else var addTxt = '\n\t\t\t\t,{';
          for(var i = 0; i < jsonLength; i++){
            if(jsonKeys[i]==='options'){
              addTxt = addTxt + '\n\t\t\t\t\t"'+jsonKeys[i]+'" :[';

              var objectValues = Object.values(jsonValues[i]);
              var objectLength = Object.keys(jsonValues[i]).length;

              console.log("!!!!!!!");
              console.log(objectLength);
              // console.log("!!!!!!!");
              for(var k = 0; k < objectLength; k++){
                var optionKeys = Object.keys(objectValues[k]);
                var optionValues = Object.values(objectValues[k]); 
                // var optionLength = Object.keys(objectValues[i]).length;
                if(k === objectLength-1)  addTxt = addTxt + '\n\t\t\t\t\t\t\t{"'+optionKeys[0]+'" : "' + optionValues[0] + '"}';
                else addTxt = addTxt + '{"'+optionKeys[0]+'" : "' + optionValues[0] + '"},';
              }

              addTxt = addTxt + '],';
              console.log("==================");
              console.log(addTxt);
            }
            else{
              if(i===jsonLength-1) addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'"\n';
              else addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'",';
            }
            
          }
          addTxt = addTxt + '\t\t\t\t}\n';
          setForm(beforeTxt + addTxt +afterTxt);
          console.log(form);
          txtArea.selectionEnd = selectPos;
      }
      /******************/ 
      else{
        if(txtArea.selectionEnd != 0){
          var beforeTxt = txtValue.substring(0, txtArea.selectionEnd);
           var afterTxt = txtValue.substring(txtArea.selectionEnd, txtValue.length);
           if(afterTxt=='') afterTxt = ']}';  
           if(count == 0) var addTxt = '\n\t\t\t\t{';
           else var addTxt = '\n\t\t\t\t,{';
            for(var i = 0; i < jsonLength; i++){
              if(i==jsonLength-1) addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'"\n';
              else addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'",';
            }
            addTxt = addTxt + '\t\t\t\t}\n';
            setForm(beforeTxt + addTxt +afterTxt);
            txtArea.selectionEnd = selectPos;
  
        }
        else{
          if(txtValue.substring(selectPos-1,selectPos)=='[' || txtValue.substring(selectPos-2,selectPos-1)=='['){
            var beforeTxt = txtValue.substring(0, selectPos); 
            var afterTxt = txtValue.substring(txtArea.selectionEnd, txtValue.length);  
            var afterTxt = txtValue.substring(txtValue.length-15, txtValue.length);    
            var addTxt = '\n\t\t\t\t{';
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
          else if(count == 0){
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
            setForm(beforeTxt + addTxt +afterTxt);
            txtArea.value = beforeTxt + addTxt + afterTxt;
            txtArea.selectionEnd = selectPos;
          }
          else if(groupElement == 1){
            var selectPos = txtValue.length-10;
            var beforeTxt = txtValue.substring(0, selectPos);
            var afterTxt = txtValue.substring(selectPos, txtValue.length); 
            var addTxt = '\t{';
            for(var i = 0; i < jsonLength; i++){
              if(i==jsonLength-1) addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'"\n';
              else addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'",';
            }
            addTxt = addTxt + '\t\t\t\t}\n\t\t\t';
            setForm(beforeTxt + addTxt + afterTxt);
            txtArea.value = beforeTxt + addTxt + afterTxt;
            selectPos = selectPos + addTxt.length;
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
              else var afterTxt = txtValue.substring(txtValue.length-14, txtValue.length);    
              if(groupElement == 1) var addTxt = '\t{';
              else var addTxt = '\t,{';
              for(var i = 0; i < jsonLength; i++){
                if(i==jsonLength-1) addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'"\n';
                else addTxt = addTxt+'\n\t\t\t\t\t"'+jsonKeys[i]+'" : "'+jsonValues[i]+'",';
              }
              addTxt = addTxt + '\t\t\t\t}\n';
              setForm(beforeTxt  +addTxt + afterTxt);
              txtArea.value = beforeTxt + addTxt + afterTxt;
              selectPos = selectPos + addTxt.length;
              txtArea.selectionEnd = selectPos; 
            }
          }
        } 
      }

       
      setGroupElement(0);
    }
    setCount(count+1);
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true)};

  const onClickButtons = () => {
    settemplateHidden(true);
    setelementHidden(false);
  };
  const onClickTemplates = () => {
    settemplateHidden(false);
    setelementHidden(true);
  };



  return (
    <FormContext.Provider value={{ handleChange }}>
    <div className="form-body">
        <div className = "header">
            <p className = "header1"><a href="/">Engineering Project</a></p>
            <div className = "menu">
                <p className = "menu1"><u>Docs</u></p>
                <p className = "menu2"><u>Showcase</u></p>
            </div>
         </div>
         <div className="main-container">
         {!element_hidden && <div className="button-container elements">
              <div className="element-buttons-heading ">Buttons</div>
              <Button className="element-button  float-right" onClick={() => addJson(15)} active={rSelected === 15}><label>Group</label></Button>{' '}
              <hr></hr>
              <Button className="element-button " onClick={() => addJson(0)} active={rSelected === 0}>Text</Button>{' '}
              <Button className="element-button " onClick={() =>addJson(4)} active={rSelected === 4}>Email</Button>{' '}
              <Button className="element-button " onClick={() =>addJson(10)} active={rSelected === 10}>Telephone</Button>{' '}
              <Button className="element-button " onClick={() =>addJson(12)} active={rSelected === 12}>Textarea</Button>{' '}
              <hr></hr>
              <Button className="element-button " onClick={() =>addJson(1)} active={rSelected === 1}>Select</Button>{' '}
              <Button className="element-button " onClick={() =>addJson(2)} active={rSelected === 2}>Checkbox</Button>{' '}
              <Button className="element-button " onClick={() =>addJson(13)} active={rSelected === 13}>Radio</Button>{' '}
              <Button className="element-button " onClick={() =>addJson(9)} active={rSelected === 9}>Number</Button>{' '}
              <hr></hr>
              <Button className="element-button " onClick={() =>addJson(5)} active={rSelected === 5}>Date</Button>{' '}
              <Button className="element-button " onClick={() =>addJson(6)} active={rSelected === 6}>Datetime</Button>{' '}
              <Button className="element-button " onClick={() =>addJson(7)} active={rSelected === 7}>Month</Button>{' '}
              <hr></hr>
              <Button className="element-button " onClick={() =>addJson(3)} active={rSelected === 3}>Color</Button>{' '}
              <Button className="element-button " onClick={() =>addJson(8)} active={rSelected === 8}>File</Button>{' '}
              <Button className="element-button " onClick={() =>addJson(11)} active={rSelected === 11}>Range</Button>{' '}
              <hr></hr>
              <Button className="element-button " onClick={() =>addJson(14)} active={rSelected === 14}>Button</Button>{' '} 
        </div>}
        {!template_hidden && <div className="button-container templates">
              <div className="element-buttons-heading">Templates</div>
                    {templates.map((item,index)=>(
                      <Button className = "selectTest element-button" onClick = {LoadTemplate} value={index}>
                        {item}
                      </Button>
                    ))}
        </div>}
        <div className="json-container">
        <div className="json-menu">
          <Button autoFocus className="open-buttons" aria-label="Buttons" onClick={onClickButtons}><FaMousePointer /></Button>
          <Button className="open-templates" aria-label="Templates" onClick={onClickTemplates}><FaBookmark /></Button>
        </div>
          <div className="json-editor-container">
            <div className="json-editor-header">
              <div className="editor-header align-items-center d-flex justify-content-between" >
                <Button className="button-reset" aria-label="Reset" onClick={() => {onClickReset()}}><FaRedo /></Button>
                <label>JSONSchema</label>
                <Button className="button-run" aria-label="Run" onClick={() => {onClickCreate()}}><FaPlay /></Button>
              </div>
            </div>
            <textarea className="editor" id="json-editor" value={form} onChange={textChange}>{schema}</textarea>
          </div>
        </div>
      <div className="right-container d-flex flex-column">
        <div className="form-container">
        <div className="form-made">
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
        </div>
        <div className="button-bar">
            <Row>
              <Col>
              <button className="btn btn-large save" onClick={handleShow}>Save</button>
              </Col>
              <Col>
                <button className="btn btn-large download" onClick={onClickDownload}>Download</button>
              </Col>
            </Row>
            </div>
        </div>
  </div>
  <div className="modal">
  <Modal className="save-modal" show={show} onHide={handleClose}>
      <Modal.Header className= "modal-header" closeButton>
        <Modal.Title>Json 파일 저장하기</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
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
      <Modal.Footer className="modal-footer">
        <Button className="closeButton" onClick={handleClose}>
          Close
        </Button>
        <Button className="saveButton" onClick={onClickSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  </div>
  </FormContext.Provider>


  );
}

  


export default FormPage;
