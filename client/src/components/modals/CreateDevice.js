import { Modal, Button } from "react-bootstrap";
import { Form } from "react-router-dom";

const CreateDevice = ({show, onHide}) => {
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
                    placeholder={"Enter Type name"}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-success" onClick={onHide}>Add</Button>
            <Button variant="outline-danger" onClick={onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    );
};

export default CreateDevice;