import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userApi';
import { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../components/Providers';
import { useNavigate } from 'react-router-dom';

const Auth = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  let location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let userData;
      if (isLogin) {
        userData = await login(email, password);
      } else {
        userData = await registration(email, password);
      }
      user.setUser(userData);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card
        style={{ width: 600 }}
        className="p-5"
      >
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row>
            <Col>
              {isLogin ? (
                <div>
                  No accaunt? <Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь</Link>
                </div>
              ) : (
                <div>
                  I have an accaunt <Link to={LOGIN_ROUTE}>Авторизируйтесь</Link>
                </div>
              )}
            </Col>
            <Col className="col-12 col-sm-6">
              <Button
                variant={'outline-success'}
                className="align-self-end"
                onClick={click}
              >
                {isLogin ? 'Enter' : 'Register'}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
