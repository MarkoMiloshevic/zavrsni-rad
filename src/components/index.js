import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import LoginComponent from './LoginComponent';
import DashboardComponent from './DashboardComponent';



const MainComponent = () => {
  const loginUsername = "asd";
  const loginPassword = "asd";

  const [ goodLogin, setGoodLogin ] = useState(null);
 
  const loginHandler = () => {
      if (goodLogin === true) {
        return (
            <DashboardComponent loginUsername={loginUsername} setGoodLogin={setGoodLogin} />
        )
      } else {
          return (
            <LoginComponent loginUsername={loginUsername} loginPassword={loginPassword} goodLogin={goodLogin} setGoodLogin={setGoodLogin} />
          )
      }
  }

  return (
    <Container className="p-0" fluid={true}>
      <Row>
        <Col>
            {loginHandler()}
        </Col>
      </Row>
    </Container>
  );
}

export default MainComponent;
