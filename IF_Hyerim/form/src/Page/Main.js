import { Container, Row, Col, Button, Form, FormGroup, Label} from 'reactstrap';
import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

function Main() {
  const [rSelected, setRSelected] = useState(null);
  const [form, setForm] = useState('');
  const json = [
    '{\n\t"field_id": "",\n\t"field_label": "",\n\t"field_mandatory": "",\n\t"field_placeholder": "",\n\t"field_value": "",\n\t"field_type": "text"\n},\n',
    '{\n\t"field_id": "",\n\t"field_label": "",\n\t"field_value": "",\n\t"field_mandatory": "",\n\t"field_options": [\n\t\t{\n\t\t\t"option_label": ""\n\t\t}\n\t],\n\t"field_type": "select"\n},\n',
    '{\n\t"field_id": "",\n\t"field_label": "",\n\t"field_value": ""\n\t"field_type": "checkbox"\n},\n',
    '{\n\t"field_id": "",\n\t"field_label": "",\n\t"field_value": ""\n\t"field_type": "color"\n},\n',
    '{\n\t"field_id": "",\n\t"field_label": "",\n\t"field_value": ""\n\t"field_type": "search"\n},\n',
    '{\n\t"field_id": "",\n\t"field_label": "",\n\t"field_value": ""\n\t"field_type": "email"\n},\n'
  ]
  const handleChange = (e) => {
      setForm(e.target.value);
  }
  const onClick = (e) => {
    setRSelected(e); 
    setForm(form+json[e]);
  }

  return (
    <Container>
        <FormGroup>
            <Label className="inputType">Input Type</Label>
            <Form>
              <Button outline color="danger" onClick={() => onClick(0)} active={rSelected === 0}>Text</Button>{' '}
              <Button outline color="warning" onClick={() =>onClick(1)} active={rSelected === 1}>Select</Button>{' '}
              <Button outline color="success" onClick={() =>onClick(2)} active={rSelected === 2}>Checkbox</Button>{' '}
              <Button outline color="info" onClick={() =>onClick(3)} active={rSelected === 3}>Color</Button>{' '}
              <Button outline color="primary" onClick={() =>onClick(4)} active={rSelected === 4}>Search</Button>{' '}
              <Button outline color="secondary" onClick={() =>onClick(5)} active={rSelected === 5}>Email</Button>{' '}
              <hr/>
            </Form>
            <Row>
              <Col>
                <TextareaAutosize cols="100" 
                  value={form}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Button outline color="danger">Submit</Button>{' '}
              </Col>
            </Row>
        </FormGroup>
    </Container>
  );      
}



export default Main;
