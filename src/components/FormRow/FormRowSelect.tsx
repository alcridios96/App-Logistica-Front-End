import React from 'react'
import { Form, Col } from 'react-bootstrap';

const FormRowSelect = (props: any) => {

  const { property, label, value, handleChange, placeholder, options } = props;

  return (
    <Form.Group controlId={property}>
      <Col className="col-md-3">
        <Form.Label >{label}</Form.Label>
      </Col>
      <Col className="col-md-9">
        <Form.Control
          required
          as="select"
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(property, e.target.value)}
        >
          <option value="">{placeholder}</option>
          {options}
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {label} es requerido.
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  );

}

export default FormRowSelect;
