import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createType } from '../../http/deviceApi';

const CreateType = ({show, onHide}) => {

    const [value, setValue] = useState('')
    const addType = () => {
        createType({name: value}).then(data=>{
            setValue('')
            onHide()
        })
    }

    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add new Type
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control   
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={"Enter Type name"}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button 
                variant="outline-success" onClick={addType}
            >Add
            </Button>
            <Button 
                variant="outline-danger" onClick={onHide}
            >Close
            </Button>
        </Modal.Footer>
    </Modal>
    );
};

export default CreateType;