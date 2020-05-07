import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../utils/Common';

function Registration(props) {
    const name = useFormInput('');
    const email = useFormInput('');
    const password = useFormInput('');
    const password_confirmation = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // ispitati da li ovo ispod ista radi
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';

    // handle button click of Registration form
    // handle button click of Registration form
    const handleRegistration = () => {
        setError(null);
        setLoading(true);
        axios.post('http://localhost:8000/api/register', { name: name.value, email: email.value, password: password.value, password_confirmation: password.value }).then(response => {
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            props.history.push('/dashboard');
        }).catch(error => {
            setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });
    }

    return (
        <div className="d-flex flex-column justify-content-center w-lg-50 w-100">
            <h3>Registration</h3><br /><br />
            <div>
                <label class="form-check-label" for="exampleCheck1">Full name</label><br />
                <input className="form-control" type="text" {...name} autoComplete="new-password" />
            </div>
            <div>
                <label class="form-check-label" for="exampleCheck1">Email</label><br />
                <input className="form-control" type="text" {...email} autoComplete="new-password" />
            </div>
            <div style={{ marginTop: 10 }}>
                <label class="form-check-label" for="exampleCheck2">Password</label><br />
                <input className="form-control" type="password" {...password} autoComplete="new-password" />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input className="btn btn-primary" type="button" value={loading ? 'Loading...' : 'Registration'} onClick={handleRegistration} disabled={loading} /><br />
           
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Registration;