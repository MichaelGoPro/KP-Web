import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import { useState } from 'react';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
        variant={'outline-dark'}
        className="mt-4 p-3"
        onClick={() => setTypeVisible(true)}
      >
        Add Type
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-3"
        onClick={() => setBrandVisible(true)}
      >
        Add Brand
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-3"
        onClick={() => setDeviceVisible(true)}
      >
        Add Device
      </Button>
      <CreateBrand
        show={brandVisible}
        onHide={() => setBrandVisible(false)}
      />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
      <CreateType
        show={typeVisible}
        onHide={() => setTypeVisible(false)}
      />
    </Container>
  );
};
export default Admin;
