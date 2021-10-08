import { Container, Row, Col, InputGroup, Button, Input, Form, FormGroup, Label, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup  } from 'reactstrap';
import React, { useState, useRef, useCallback, setValue } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

function Practice1() {
  const [rSelected, setRSelected] = useState(null);
  const [age, setAge] = useState(0);


  // this.checkAge is passed as the callback to setState
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
              <Button outline color="danger" onClick={() => setRSelected(1)} active={rSelected === 1}>Text</Button>{' '}
              <Button outline color="warning" onClick={() => setRSelected(2)} active={rSelected === 2}>Email</Button>{' '}
              <Button outline color="success" onClick={() => setRSelected(3)} active={rSelected === 3}>Password</Button>{' '}
              <Button outline color="info" onClick={() => setRSelected(4)} active={rSelected === 4}>Color</Button>{' '}
              <Button outline color="primary" onClick={() => setRSelected(5)} active={rSelected === 5}>Search</Button>{' '}
              <Button outline color="secondary" onClick={() => setRSelected(6)} active={rSelected === 6}>Text</Button>{' '}
              <hr/>
            </Form>
            <p>Selected: {rSelected}</p>
            <Row>
              <Col>
                {/* <TextareaAutosize cols="100" 
                  placeholder={rSelected} 
                  value={age}
                  onChange={e => updateAge(e.target.value)}
                /> */}
                <input
                  type="number"
                  value={age}
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



export default Practice1;
