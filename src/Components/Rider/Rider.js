import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './register.css';
import pic1 from './voting.svg';
import pic2 from './enter.svg';
import { useNavigate } from "react-router-dom";
import useAuth from '../Context/useAuth';


const Rider = () => {
    // states 
    const [registerData, setregisterData] = useState({});
    const [passError, setpassError] = useState('');
    const [drivingPic, setDrivingPic] = useState(null);
    const [nidPic, setNidPic] = useState(null);
    const [profilePic, setProfilePic] = useState(null);
    const history = useNavigate();
    const { createUser } = useAuth();
    let repassword;

    // dynamically setting fields 
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setregisterData(newRegisterData);
        // console.log(loginData)

    }
    // checking passwords
    const hadlePass = e => {
        console.log(e.target.value);
        repassword = e.target.value;
        if (registerData.pass === repassword) {
            console.log(registerData.pass, repassword)
            setpassError('')
        } else {
            console.log(registerData.pass, repassword)
            setpassError('passward doesnt match')

        }
    }

    // submitting data
    const handleLoginSubmit = e => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('registerData', JSON.stringify(registerData))
        formData.append('drivingPic', drivingPic)
        formData.append('nidPic', nidPic)
        formData.append('profilePic', profilePic)

        fetch('https://hidden-reef-13109.herokuapp.com/rider', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('rider added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        createUser(registerData.name, registerData.email, registerData.pass, history);

    }
    return (
        <Container fluid className='explore-body'>
            <Container className='my-5 py-2'>
                {/* register form */}
                <h2 className='text-center fs-1 fw-bold'><img src={pic1} alt="" height='60' width='60' /><span className='textColor'>Rider </span>Register</h2>
                <hr className='mx-auto w-25' />
                <form className='mt-3 pt-2  py-3' onSubmit={handleLoginSubmit}>
                    <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='FullNANME' name="name" id="name" />
                    <input required className='inputs my-4 w-50' type="email" onChange={handleOnChange} placeholder='Email' name="email" id="email" />
                    <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='Age' name="age" id="age" />
                    <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='Address' name="address" id="address" />
                    <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='phone' name="phone" id="phone" />
                    <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='Area' name="area" id="area" />
                    <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='car or bike' name="vehicle" id="vehicle" />
                    <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='vehicle name' name="vehicleName" id="vehicleName" />
                    <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='vehicle Model' name="vehicleModel" id="vehicleModel" />
                    <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='name palate' name="namePalate" id="namePalate" />
                    <div class="inputs my-4 ">
                        <label for="formFile" class="form-label text-white">Driving License Pic</label>
                        <input class="form-control " type="file" id="formFile" name='drivingPic' onChange={e => setDrivingPic(e.target.files[0])} />
                    </div>
                    <div class="inputs my-4 ">
                        <label for="formFile" class="form-label text-white">NID Pic</label>
                        <input class="form-control " type="file" id="formFile" name='nidPic' onChange={e => setNidPic(e.target.files[0])} />
                    </div>
                    <div class="inputs my-4 ">
                        <label for="formFile" class="form-label text-white">Profile Pic</label>
                        <input class="form-control " type="file" id="formFile" name='profilePic' onChange={e => setProfilePic(e.target.files[0])} />
                    </div>

                    <input required className='inputs my-4 w-50' type="password" onChange={handleOnChange} placeholder='password' name="pass" id="pass" />
                    <input required className='inputs my-4 w-50' type="password" onBlur={hadlePass} placeholder='re-enter password' name="re-pass" id="pass" />
                    {passError ? <p className='text-danger text-center'>{passError}</p> : ''}

                    <button className='inputs btncolr  mt-2 fs-3 mb-5'>Register <img src={pic2} alt="" height='30' width='30' /></button>
                </form>
            </Container>
        </Container>
    );
};

export default Rider;