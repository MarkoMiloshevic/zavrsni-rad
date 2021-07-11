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
    <div className="container-fluid">
      <div className="row p-0">
        <div className="col p-0">
            {loginHandler()}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
