import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import { Context } from '../..';
import { Col, Dropdown, Row } from 'react-bootstrap';

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
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
                Add new Device
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Dropdown className="m-3 mb-3">
                <Dropdown.Toggle>Choose Type</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.types.map(type =>
                        <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-3  mb-3">
                <Dropdown.Toggle>Choose Brand</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.brands.map(brand =>
                        <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control
                className="mt-3"
                placeholder="Enter Device name"
            />
            <Form.Control
                className="mt-3"
                placeholder="Enter Device price"
                type="number"
            />
            <Form.Control
                className="mt-3"
                type="file"
            />
            <hr/>
            <Button
                variant={"outline-dark"}
                onClick={addInfo}
            >Add new property
            </Button>
            {
                info.map(i =>
                    <Row className='mt-2' key={i.number}>
                        <Col md ={4}>
                            <Form.Control
                                placeholder='Enter property name'
                            />
                        </Col>
                        <Col md ={4}>
                            <Form.Control
                                placeholder='Enter property description'
                            />
                        </Col>
                        <Col md ={4}>
                            <Button
                                onClick={() => removeInfo(i.number)} 
                                variant={'outline-danger'}
                            >Delete
                            </Button>
                        </Col>
                    </Row>)
            }
        </Modal.Body>
        <Modal.Footer>
            <Button 
                variant="outline-success" onClick={onHide}
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

export default CreateDevice;