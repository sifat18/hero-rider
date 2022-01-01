import React, { useEffect, useState } from 'react';
import { Container, Table, } from 'react-bootstrap';

const NewDrivers = () => {
    let count = 0;
    const [newDriver, setnewDriver] = useState([])
    const size = 10;
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        fetch(`https://hidden-reef-13109.herokuapp.com/driver?page=${page}&&size=${size}`).then(res => res.json()).then(data => {
            setnewDriver(data.drivers);
            const count = data.count;
            const pageNumber = Math.ceil(count / size);
            setPageCount(pageNumber);
        })

    }, [page])
    return (
        <Container data-aos="flip-right" fluid className='pt-3   text-center allorderbg'>
            <h2 className='text-center '> Registered Drivers for lesson</h2>
            <hr className='d-block w-50 mb-5 mx-auto' />  <Table responsive striped bordered hover >
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
                    {newDriver.map(driver =>
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