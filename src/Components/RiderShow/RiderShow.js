import React, { useEffect, useState } from 'react';
import { Container, Table, } from 'react-bootstrap';
import './ride.css'
const RiderShow = () => {
    let count = 0;

    const [riders, setRiders] = useState([])
    const size = 10;
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
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
            <Table responsive striped bordered hover >
                <thead>
                    <tr className='text-center'>
                        <th className='fs-3 text-white'>Sl</th>
                        <th className='fs-3 text-white'>name</th>
                        <th className='fs-3 text-white'>age</th>
                        <th className='fs-3 text-white'>email</th>
                        <th className='fs-3 text-white'>phone</th>
                        <th className='fs-3 text-white'>action</th>
                        {/* <th className='fs-3 text-white'>Delete</th> */}
                    </tr>
                </thead>
                <tbody>
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
                            {/* <td className='fs-4 text-white '><button type='button' onClick={() => getmodal(product?._id)} className='d-block border-0 mx-auto'>delete</button></td> */}
                        </tr>
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

export default RiderShow;