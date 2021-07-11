import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import DataTable from 'react-data-table-component';
import faker, { fake } from 'faker';




const ZaposleniComponent = ({}) => {


    const [ newName, setNewName ] = useState("");
    const [ newEmail, setNewEmail ] = useState("");
    const [ newAddress, setNewAddress ] = useState("");
    const [ newBio, setNewBio ] = useState("");
    const [ fakeUsers, setFakeUsers] = useState([])
    const [openModal, setOpenModal ] = useState(false);


    const createUser = () => {
        return {
          workerName: faker.name.findName(),
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
    useEffect(() => {
        setFakeUsers(createUsers(15));
    }, [])



    const makeNewUser = () => {
        const allData = {
            workerName : newName,
            email : newEmail,
            address : newAddress,
            bio : newBio,
        }
        setFakeUsers([allData, ...fakeUsers])
    }

    const removeUser = (email) => {
        setFakeUsers(fakeUsers.filter(item => item.email !== email))
    }
    console.log(fakeUsers)


    const columns = [
        {
            name: 'Slika',
            cell: row => <img src={row.image} />,
            sortable: true,
        },
        {
            name: 'Ime I Prezime',
            cell: row => row['workerName'],
            sortable: true,
        },
        {
            name: 'Email',
            cell: row => row['email'],
            sortable: true,
        },
        {
            name: 'Adresa',
            cell: row => row['address'],
            sortable: true,
        },
        {
            name: 'Bio',
            cell: row => row['bio'],
            sortable: true,
        },
        {
            name: 'DELETE',
            cell: row => <Button onClick={() => removeUser(row.email)} >DELETE</Button>,
            sortable: false,
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
                    <div className="zaposleni">
                        <button onClick={() => setOpenModal(!openModal)}> Dodajte novog zaposlenog</button>
                        <Modal show={openModal} onHide={() => setOpenModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Dodajte Novog Zaposlenog</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                               <label>
                                   Ime
                                   <input type="text" onChange={(e) => setNewName(e.target.value)} defaultValue={newName} />
                               </label>
                               <label>
                                   Email
                                   <input type="text" onChange={(e) => setNewEmail(e.target.value)} defaultValue={newEmail} />
                               </label>
                               <label>
                                   Adresa
                                   <input type="text" onChange={(e) => setNewAddress(e.target.value)} defaultValue={newAddress} />
                               </label>
                               <label>
                                   Bio
                                   <input type="text" onChange={(e) => setNewBio(e.target.value)} defaultValue={newBio} />
                               </label>
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={() => makeNewUser()} variant="secondary">
                                    Dodaj novog radnika
                                </button>
                            </Modal.Footer>
                        </Modal>
                        <DataTable
                            title="Zaposleni"
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

export default ZaposleniComponent
