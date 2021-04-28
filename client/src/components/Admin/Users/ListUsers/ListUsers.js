import React, { useState } from 'react';
import { Switch, List, Avatar, Button } from 'antd';
import { Icon } from '@ant-design/compatible';

import NoAvatar from "../../../../assets/img/png/no-avatar.png";

import "./ListUsers.scss";
import { Modal } from '../../../Modal/Modal';
import { EditUserForm } from '../EditUserForm/EditUserForm';


export const ListUsers = ( props ) => {

    const { usersActive, usersInactive } = props;
    const [viewUsersActives, setViewUsersActives] = useState( true );
    const [checkModal, setCheckModal] = useState( false );
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    return (
        <div className="list-users">
            <div className="list-users__switch">
                <Switch 
                    defaultChecked
                    onChange={ () => setViewUsersActives( !viewUsersActives ) }
                />
                <span>
                    { viewUsersActives ? "Usuarios activos" : "Usuarios Inactivos" }
                </span>
            </div>

            { 
                viewUsersActives 
                    ? 
                        <UsersActive 
                            usersActive={ usersActive } 
                            setCheckModal={ setCheckModal } 
                            setModalTitle={ setModalTitle }
                            setModalContent={ setModalContent }
                        /> 
                    :   
                        <UsersInactive 
                            usersInactive={ usersInactive } 
                        />
            }

            <Modal
                title={ modalTitle }
                isVisible={ checkModal }
                setIsVisible={ () => setCheckModal( (checkModal) => !checkModal ) }
            >
                { modalContent }
            </Modal>
            
        </div>
    );
};


const UsersActive = ( props ) => {

    const { usersActive, setCheckModal, setModalTitle, setModalContent } = props;

    const editUser = ( user ) => {
        setCheckModal( (checkModal) => !checkModal )
        setModalTitle(`Editar ${user.name ? user.name : "..." } ${user.lastname ? user.lastname : "..." }`)
        setModalContent(<EditUserForm user={ user } />)
    };


    return (
        <List 
            className="users-active"
            itemLayout="horizontal"
            dataSource={ usersActive }
            renderItem={ user => (
                <List.Item
                    actions={[
                        <Button 
                            type="primary"
                            onClick={ () => editUser( user )  }
                        >
                            <Icon type="edit" />
                        </Button>,
                        <Button 
                            type="danger"
                            onClick={ () => console.log("Desactivar Usuario") }
                        >
                            <Icon type="stop" />
                        </Button>,
                        <Button 
                            type="danger"
                            onClick={ () => console.log("Eliminar Usuario") }
                        >
                            <Icon type="delete" />
                        </Button>
                    ]}
                >
                    <List.Item.Meta 
                        avatar={ <Avatar src={ user.avatar ? user.avatar : NoAvatar } /> }
                        title={`
                            ${ user.name ? user.name : '...' }
                            ${ user.lastname ? user.lastname : '...' }
                        `}
                        description={ user.email }
                    />
                </List.Item>
            ) }
        />
    )
};

const UsersInactive = ( props ) => {

    const { usersInactive } = props;

    
    return (
        <List 
            className="users-active"
            itemLayout="horizontal"
            dataSource={ usersInactive }
            renderItem={ user => (
                <List.Item
                    actions={[
                        <Button 
                            type="primary"
                            onClick={ () => console.log("Activar Usuario") }
                        >
                            <Icon type="check" />
                        </Button>,
                        <Button 
                            type="danger"
                            onClick={ () => console.log("Eliminar Usuario") }
                        >
                            <Icon type="delete" />
                        </Button>
                    ]}
                >
                    <List.Item.Meta 
                        avatar={ <Avatar src={ user.avatar ? user.avatar : NoAvatar } /> }
                        title={`
                            ${ user.name ? user.name : '...' }
                            ${ user.lastname ? user.lastname : '...' }
                        `}
                        description={ user.email }
                    />
                </List.Item>
            ) }
        />
    )
};
