import { Container, Row, Col, InputGroup, Button, Input, Form, FormGroup, Label, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup  } from 'reactstrap';
import React, { useState, useRef, useCallback, setValue } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

function Main() {
  const [rSelected, setRSelected] = useState(null);
  const [age, setAge] = useState(0);
  const json = [
    '{\n\t"field_id": "",\n\t"field_label": "",\n\t"field_mandatory": "",\n\t"field_placeholder": "",\n\t"field_value": "",\n\t"field_type": "text"\n},',
    '{\n\t"field_id": "",\n\t"field_label": "",\n\t"field_value": "",\n\t"field_mandatory": "",\n\t"field_options": [\n\t\t{\n\t\t\t"option_label": ""\n\t\t}\n\t],\n\t"field_type": "select"\n},',
    '{\n\t"field_id": "",\n\t"field_label": "",\n\t"field_value": ""\n\t"field_type": "checkbox"\n},'
  ]

  const updateAge = (value) => {
    setAge({age: value}, checkAge);
  };

  const checkAge = () => {
    // const { age } = setAge;
    if (age !== 0 && age >= 21) {
      // Make API call to /beer
    } else {
      // Throw error 404, beer not found
    }
  };

  return (
    <Container>
        <FormGroup>
            <Label className="inputType">Input Type</Label>
            <Form>
              <Button outline color="danger" onClick={() => setRSelected(0)} active={rSelected === 0}>Text</Button>{' '}
              <Button outline color="warning" onClick={() => setRSelected(1)} active={rSelected === 1}>Select</Button>{' '}
              <Button outline color="success" onClick={() => setRSelected(2)} active={rSelected === 2}>Checkbox</Button>{' '}
              <Button outline color="info" onClick={() => setRSelected(3)} active={rSelected === 3}>Color</Button>{' '}
              <Button outline color="primary" onClick={() => setRSelected(4)} active={rSelected === 4}>Search</Button>{' '}
              <Button outline color="secondary" onClick={() => setRSelected(5)} active={rSelected === 5}>Email</Button>{' '}
              <hr/>
            </Form>
            {/* <p>Selected: {rSelected}</p> */}
            <Row>
              <Col>
                <TextareaAutosize cols="100" 
                  placeholder={rSelected} 
                  // value={rSelected} 
                  value={json[rSelected]}
                  onChange={e => updateAge(e.target.value)}
                />
              </Col>
              <Col>
                <Button outline color="danger">Submit</Button>{' '}
              </Col>
            </Row>
            
            {/* <div>
                {cSelected.map(type =>{     
                    return (
                      <FormGroup className="form">
                          <Label for={type}>{type}</Label>
                          <br/>
                          <Input
                              type={type}
                              name={type}
                              id={type}
                              placeholder={type}
                              value = {value}
                              onChange = {onChange11}
                          />
                      </FormGroup>
                    );
                })}
            </div> */}
        </FormGroup>
    </Container>
  );      
}



export default Main;
