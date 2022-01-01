import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, } from 'react-bootstrap';

const NewDrivers = () => {
    let count = 0;
    // state variables 
    const [display, setDisplay] = useState([])

    const [newDriver, setnewDriver] = useState([])
    const size = 10;
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    // fetching limited data

    useEffect(() => {
        fetch(`https://hidden-reef-13109.herokuapp.com/driver?page=${page}&&size=${size}`).then(res => res.json()).then(data => {
            setnewDriver(data.drivers);
            const count = data.count;
            const pageNumber = Math.ceil(count / size);
            setPageCount(pageNumber);
        })

    }, [page])
    useEffect(() => {
        setDisplay(newDriver);
    }, [newDriver]);

    const handlesearch = event => {
        // getting text value
        let text = event.target.value;
        // filtering the material type
        let result = newDriver.filter(driver => driver.fullName.toLowerCase().includes(text.toLowerCase()))
        // setting to display
        setDisplay(result);
        // testing
        // console.log(result)
    }
    const handlesearch3 = event => {
        // getting text value
        let text = event.target.value;
        // filtering the material type
        let result = newDriver.filter(driver => driver.phone.toString().includes(text))
        // setting to display
        setDisplay(result);
        // testing
        // console.log(result)
    }
    const handlesearch2 = event => {
        // getting text value
        let text = event.target.value;
        // filtering the material type
        let result = newDriver.filter(driver => driver.email.toLowerCase().includes(text.toLowerCase()))
        // setting to display
        setDisplay(result);
        // testing
        // console.log(result)
    }
    return (
        <Container data-aos="flip-right" fluid className='pt-3   text-center allorderbg'>
            <h2 className='text-center '> Registered Drivers for lesson</h2>
            <hr className='d-block w-50 mb-5 mx-auto' />
            <Container>
                <Row>
                    <Col>
                        <div className="searchDiv h-25 py-4 ">
                            <h2 className='fs-4 fw-bold text-light mt-3'>SearchByName</h2>
                            <input className='search ' onChange={handlesearch} placeholder='Search by name' type="text" name="search" id="search" />
                        </div>
                    </Col>
                    <Col>
                        <div className="searchDiv h-25 py-4 ">
                            <h2 className='fs-4 fw-bold text-light mt-3'>SearchByEmail</h2>
                            <input className='search' onChange={handlesearch2} placeholder='Search by email' type="text" name="search" id="search" />
                        </div>
                    </Col>
                    <Col>
                        <div className="searchDiv h-25 py-4 ">
                            <h2 className='fs-4 fw-bold text-light mt-3'>SearchByPhone</h2>
                            <input className='search ' onChange={handlesearch3} placeholder='Search by phone' type="text" name="search" id="search" />
                        </div>
                    </Col>
                </Row>

            </Container>
            <Table responsive striped bordered hover >
                {/* table header */}
                <thead>
                    <tr className='text-center'>
                        <th className='fs-3 text-white'>Sl</th>
                        <th className='fs-3 text-white'>name</th>
                        <th className='fs-3 text-white'>age</th>
                        <th className='fs-3 text-white'>email</th>
                        <th className='fs-3 text-white'>phone</th>
                        <th className='fs-3 text-white'>action</th>

                    </tr>
                </thead>
                <tbody>
                    {/* looping data */}
                    {display.map(driver =>
                        <tr key={driver._id} className='text-center'>
                            <td className='fs-4 text-white '>{++count}</td>
                            <td className='fs-4 text-white '>{driver.fullName}</td>
                            <td className='fs-4 text-white '>{driver.age}</td>
                            <td className='fs-4 text-white '>{driver.email}</td>
                            <td className='fs-4 text-white '>{driver.phone}</td>
                            <td className='fs-4 text-white '>
                                <div className="form-check ">
                                    <input className="form-check-input mx-auto" type="checkbox" value="" id="flexCheckDefault" />

                                </div>
                            </td></tr>
                    )}
                </tbody>
            </Table>
            {/* page number buttons */}

            <div className="pagination">
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className={number === page ? 'selected' : ''}
                            key={number}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                }
            </div>
        </Container>
    );
};

export default NewDrivers;