import React, { useEffect, useState } from 'react';
import { Container, Table, } from 'react-bootstrap';
import './ride.css'
const RiderShow = () => {
    // table count
    let count = 0;
    // state variables 
    const [riders, setRiders] = useState([])
    const size = 10;
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    // fetching limited data
    useEffect(() => {
        fetch(`https://hidden-reef-13109.herokuapp.com/rider?page=${page}&&size=${size}`).then(res => res.json()).then(data => {
            setRiders(data.riders)
            const count = data.count;
            const pageNumber = Math.ceil(count / size);
            setPageCount(pageNumber);
        })

    }, [page])

    return (
        <Container data-aos="flip-right" fluid className='pt-3   text-center allorderbg'>
            <h2 className='text-center '> Registered Riders</h2>
            <hr className='d-block w-25 mb-5 mx-auto' />
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

                    {riders.map(rider =>
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