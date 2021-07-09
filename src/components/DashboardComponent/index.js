import React, {useState} from 'react';
import ZaposleniComponent from '../ZaposleniComponent';
import PlateComponent from '../PlateComponent';
import RadnaMestaComponent from '../RadnaMestaComponent';
import '../../style/DashboardComponent.css';
import logo from '../../assets/logo.png';



const DashboardComponent = ({setGoodLogin, loginUsername}) => {

    const [ selectedPage, setSelectedPage ] = useState('zaposleni');

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
        <div className="dashboard-component">
            <div className="navbar text-light p-0 m-0">
                <div className="navbar-brand" href="zaposleni"><img className="navbar_brand_logo" src={logo} /></div>
                <div className="nav">
                <div className="nav-link" onClick={() => setSelectedPage('zaposleni')} href="#zaposleni">Zaposleni</div>
                <div className="nav-link" onClick={() => setSelectedPage('plate')} href="#plate">Plate</div>
                <div className="nav-link" onClick={() => setSelectedPage('radna_mesta')} href="#radnamesta">Radna Mesta</div>
                </div>
            </div>
            <div className="pages">
                {showPageHandler()}
            </div>
        </div>
    );
}

export default DashboardComponent
