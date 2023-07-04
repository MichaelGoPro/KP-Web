import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState('');
  const addBrand = () => {
    createBrand({ name: value })
      .then((data) => {
        setValue('');
        onHide();
      })
      .catch((error) => alert(error.response.data.message));
  };
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add new Brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Enter Brand name"
          ></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant={'outline-danger'}
          onClick={onHide}
        >
          Close
        </Button>
        <Button
          variant={'outline-success'}
          onClick={addBrand}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
