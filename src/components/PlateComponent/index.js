import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import DataTable from 'react-data-table-component';
import faker, { fake } from 'faker';
import '../../style/PlateComponent.css';



const PlateComponent = ({}) => {

    const createUser = () => {
        return {
          name: faker.name.findName(),
          email: faker.internet.email(),
          address: faker.address.streetAddress(),
          bio: faker.lorem.sentence(),
          image: faker.image.avatar()
        }
      }

      const createUsers = (numUsers = 5) => {
        return new Array(numUsers)
          .fill(undefined)
          .map(createUser);
      }
      
    let fakeUsers = createUsers(15)

    console.log(fakeUsers)

    const columns = [
        {
            name: 'Slika',
            cell: row => <img src={row.image} />,
            sortable: true,
        },
        {
            name: 'Ime I Prezime',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Adresa',
            selector: 'address',
            sortable: true,
        },
        {
            name: 'Bio',
            selector: 'bio',
            sortable: true,
        },
    ];

    const customStyles = {
        header: {
          style: {
            backgroundColor: '#232931',
          }
        },
        rows: {
            style: {
              backgroundColor: '#232931',
            }
          },
        headCells: {
            style: {
              backgroundColor: '#232931',
            }
          },
        pagination: {
            style: {
              backgroundColor: '#232931',
            }
          },
      };
    

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="plate">
                        <DataTable
                            title="Plate"
                            columns={columns}
                            data={fakeUsers}
                            theme="dark"
                            customStyles={customStyles}
                            pagination
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlateComponent
