import React, { useEffect, useState } from 'react';
import { getAccessTokenApi } from '../../../api/auth';
import { getUsersActiveApi } from '../../../api/user';
import { ListUsers } from '../../../components/Admin/Users/ListUsers/ListUsers';

import './Users.scss';



const Users = () => {

    const [usersActive, setUsersActive] = useState([]);
    const [usersInactive, setusersInactive] = useState([]);
    const [reloadUsers, setReloadUsers] = useState( false );
    const token = getAccessTokenApi();


    useEffect(() => {

        getUsersActiveApi( token, true ).then( response => {
            setUsersActive( response.users );
        } );

        getUsersActiveApi( token, false ).then( response => {
            setusersInactive( response.users );
        } );
        setReloadUsers( false );
    }, [ token, reloadUsers ]);

    return (
        <div className="users">
            <ListUsers usersActive={ usersActive } usersInactive={ usersInactive } setReloadUsers={ setReloadUsers } />
        </div>
    )
}

export default Users;