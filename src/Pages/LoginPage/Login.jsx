import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import LoginForm from '../../Components/LoginForm/LoginForm';
import style from './Login.module.css'
const Login = () => {


    return (
      <>
        {" "}
        <div className={style.login_wrap_bg}>
          <Container>
            <Row className='pt-5'>
              <Col xs={6}>
                            <h4 className="text-white text-center">Login Here</h4>
                            <LoginForm></LoginForm>
              </Col>
              <Col xs={6}></Col>
            </Row>
          </Container>
        </div>
      </>
    );
};

export default Login;