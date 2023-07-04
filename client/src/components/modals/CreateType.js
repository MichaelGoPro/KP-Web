import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createType } from '../../http/deviceAPI';

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const addType = () => {
    createType({ name: value })
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
        <Modal.Title id="contained-modal-title-vcenter">Add new Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Enter Type name"
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
          onClick={addType}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateType;
