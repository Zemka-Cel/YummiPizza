import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../utils/Common';
import history from '../history';
import { Link } from "react-router-dom";


function Login(props) {
    const email = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // ispitati da li ovo ispod ista radi
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';


    // handle button click of login form
    // handle button click of login form
    const handleLogin = () => {
        setError(null);
        setLoading(true);
        axios.post('http://localhost:8000/api/login', { email: email.value, password: password.value }).then(res => (res.status === 200) && history.push('/pizzas')).catch(error => {
            setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });
    }
    return (
        <div className="d-flex flex-column justify-content-center w-lg-50 w-100">
            <h3>Login</h3><br /><br />
            <div>
                <label class="form-check-label" for="exampleCheck1">Email</label><br />
                <input className="form-control" type="text" {...email} autoComplete="new-password" />
            </div>
            <div style={{ marginTop: 10 }}>
                <label class="form-check-label" for="exampleCheck2">Password</label><br />
                <input className="form-control" type="password" {...password} autoComplete="new-password" />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input className="btn btn-primary" type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
            <div className="d-flex justify-content-between">
                <p className="d-inline-block pt-2">Don't have an account?</p> 
                <Link to={"/registration"} className="nav-link">
                    Register here!
                </Link>
            </div>
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

export default Login;