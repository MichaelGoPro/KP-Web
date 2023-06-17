import React, {useState} from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType"
import CreateBrand from "../components/modals/CreateBrand"
import CreateDevice from "../components/modals/CreateDevice"

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center">   
            <Button
                style={{width: 300}}
                variant={"outline-dark"} className="mt-3 p-3"
                onClick={() => setTypeVisible(true)}
            >Add Type
            </Button>
            <Button 
                style={{width: 300}}
                variant={"outline-dark"} className="mt-3 p-3"
                onClick={() => setBrandVisible(true)}
            >Add Brand
            </Button>
            <Button 
                style={{width: 300}}
                variant={"outline-dark"} className="mt-3 p-3"
                onClick={() => setDeviceVisible(true)}
            >Add Device
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;