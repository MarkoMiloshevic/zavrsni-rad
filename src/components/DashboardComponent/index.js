import React, {useState} from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

import ZaposleniComponent from '../ZaposleniComponent';
import PlateComponent from '../PlateComponent';
import RadnaMestaComponent from '../RadnaMestaComponent';



const DashboardComponent = ({setGoodLogin, loginUsername}) => {

    const [ selectedPage, setSelectedPage ] = useState('');

    const showPageHandler = () => {
        if (selectedPage === "zaposleni") {
            return (
                <ZaposleniComponent />  
            )
        } else if (selectedPage === "plate") {
            return (
                <PlateComponent />
            ) 
        } else if ( selectedPage === "radna_mesta" ) {
            return (
                <RadnaMestaComponent />
            )
        }
    }

    return (
        <div className="login-component">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Hello {loginUsername}</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link onClick={() => setSelectedPage('zaposleni')} href="#zaposleni">Zaposleni</Nav.Link>
                <Nav.Link onClick={() => setSelectedPage('plate')} href="#plate">Plate</Nav.Link>
                <Nav.Link onClick={() => setSelectedPage('radna_mesta')} href="#radnamesta">Radna Mesta</Nav.Link>
                </Nav>
            </Navbar>
            <div className="pages">
                {showPageHandler()}
            </div>
        </div>
    );
}

export default DashboardComponent
