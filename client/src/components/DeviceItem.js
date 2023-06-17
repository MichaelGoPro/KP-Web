import React from "react";
import {Card, Col, Image} from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    console.log(navigate);
    return (
        <Col md={3} className="mt-3" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={device.img}/>
                <div className="mt-1">
                    <div className="text-black-50">Samsung</div>
                    <div> {device.name} </div>
                </div>
            </Card>
        </Col>
    );
}
export default DeviceItem;