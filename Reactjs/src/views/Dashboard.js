import React from 'react';
import {getUser} from '../utils/Common';

import { removeUserSession } from '../utils/Common';

function Dashboard(props) {

    // const user = getUser();

    // handle click event of logout button
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }

    return (
        <div>
            Welcome!<br /><br />
            <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    );
}

export default Dashboard;