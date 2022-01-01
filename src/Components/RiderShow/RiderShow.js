import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, } from 'react-bootstrap';
import './ride.css'
const RiderShow = () => {
    // table count
    let count = 0;
    // state variables 
    const [riders, setRiders] = useState([])
    const size = 10;
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [display, setDisplay] = useState([])
    // fetching limited data
    useEffect(() => {
        fetch(`https://hidden-reef-13109.herokuapp.com/rider?page=${page}&&size=${size}`).then(res => res.json()).then(data => {
            setRiders(data.riders)
            const count = data.count;
            const pageNumber = Math.ceil(count / size);
            setPageCount(pageNumber);
        })

    }, [page])

    useEffect(() => {
        setDisplay(riders);
    }, [riders]);

    const handlesearch = event => {
        // getting text value
        let text = event.target.value;
        // filtering the material type
        let result = riders.filter(ride => ride.fullName.toLowerCase().includes(text.toLowerCase()))
        // setting to display
        setDisplay(result);
        // testing
        // console.log(result)
    }
    const handlesearch3 = event => {
        // getting text value
        let text = event.target.value;
        // filtering the material type
        let result = riders.filter(ride => ride.phone.toString().includes(text))
        // setting to display
        setDisplay(result);
        // testing
        // console.log(result)
    }
    const handlesearch2 = event => {
        // getting text value
        let text = event.target.value;
        // filtering the material type
        let result = riders.filter(ride => ride.email.toLowerCase().includes(text.toLowerCase()))
        // setting to display
        setDisplay(result);
        // testing
        // console.log(result)
    }
    return (
        <Container data-aos="flip-right" fluid className='pt-3   text-center allorderbg'>
            <h2 className='text-center '> Registered Riders</h2>
            <hr className='d-block w-25 mb-5 mx-auto' />
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

                    {display.map(rider =>
                        <tr key={rider._id} className='text-center'>
                            <td className='fs-4 text-white '>{++count}</td>
                            <td className='fs-4 text-white '>{rider.fullName}</td>
                            <td className='fs-4 text-white '>{rider.age}</td>
                            <td className='fs-4 text-white '>{rider.email}</td>
                            <td className='fs-4 text-white '>{rider.phone}</td>
                            <td className='fs-4 text-white '>
                                <div className="form-check ">
                                    <input className="form-check-input mx-auto" type="checkbox" value="" id="flexCheckDefault" />

                                </div>
                            </td>
                        </tr>
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

export default RiderShow;