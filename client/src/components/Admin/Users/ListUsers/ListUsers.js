import React, { useEffect, useState } from 'react';
import { Switch, List, Avatar, Button, Modal as ModalAntd, notification } from 'antd';
import { Icon } from '@ant-design/compatible';

import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import { Modal } from '../../../Modal/Modal';
import { EditUserForm } from '../EditUserForm/EditUserForm';
import { AddUserForm } from '../AddUserForm/AddUserForm';
import { getAvatarApi, activateUserApi, deleteUserApi } from '../../../../api/user';
import { getAccessTokenApi } from '../../../../api/auth';

import "./ListUsers.scss";


const { confirm } = ModalAntd;

export const ListUsers = ( props ) => {

    const { usersActive, usersInactive, setReloadUsers } = props;
    const [viewUsersActives, setViewUsersActives] = useState( true );
    const [checkModal, setCheckModal] = useState( false );
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    const addUserModal = () => {
        setCheckModal( true );
        setModalTitle("Creando nuevo usuario");
        setModalContent(
            <AddUserForm 
                setCheckModal={ setCheckModal }
                setReloadUsers={ setReloadUsers }
            />
        );
    };

    return (
        <div className="list-users">

            <div className="list-users__header">
                <div className="list-users__header-switch">
                    <Switch 
                        defaultChecked
                        onChange={ () => setViewUsersActives( !viewUsersActives ) }
                    />
                    <span>
                        { viewUsersActives ? "Usuarios activos" : "Usuarios Inactivos" }
                    </span>
                </div>

                <Button type="primary" onClick={ addUserModal }>
                    Nuevo usuario
                </Button>
                
            </div>
            

            { 
                viewUsersActives 
                    ? 
                        <UsersActive 
                            usersActive={ usersActive } 
                            setCheckModal={ setCheckModal } 
                            setModalTitle={ setModalTitle }
                            setModalContent={ setModalContent }
                            setReloadUsers={ setReloadUsers }
                        /> 
                    :   
                        <UsersInactive 
                            usersInactive={ usersInactive }
                            setReloadUsers={ setReloadUsers }
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

    const { usersActive, setCheckModal, setModalTitle, setModalContent, setReloadUsers } = props;

    const editUser = ( user ) => {
        setCheckModal( (checkModal) => !checkModal )
        setModalTitle(`Editar ${user.name ? user.name : "..." } ${user.lastname ? user.lastname : "..." }`)
        setModalContent(<EditUserForm user={ user } setCheckModal={ setCheckModal } setReloadUsers={ setReloadUsers } />)
    };


    return (
        <List 
            className="users-active"
            itemLayout="horizontal"
            dataSource={ usersActive }
            renderItem={ user => (<UserActive user={user} editUser={editUser} setReloadUsers={ setReloadUsers } />) }
        />
    )
};

const UserActive = ( props ) => {
    const { user, editUser, setReloadUsers } = props;
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        if (user.avatar) {
            getAvatarApi(user.avatar).then( response => {
                setAvatar(response);
            } );
        } else {
            setAvatar( null );
        }
    }, [user]);

    const desactivateUser = () => {
        const accessToken = getAccessTokenApi();

        activateUserApi( accessToken, user._id, false )
            .then( response => {
                notification["success"]({
                    message: response
                });
                setReloadUsers(true);
            } )
            .catch( err => {
                notification["error"]({
                    message: err
                });
            } );
    };

    const showDeleteConfirm = () => {
        const accessToken = getAccessTokenApi();

        confirm({
            title: "Eliminando usuario",
            content: `¿Estás seguro que quieres eliminar a ${ user.email }?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteUserApi( accessToken, user._id )
                .then( response =>{
                    notification["success"]({
                        message: response
                    });
                    setReloadUsers(true);
                } )
                .catch( err => {
                    notification["error"]({
                        message: err
                    });
                } )
            }
        })
    };

    return (
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
                    onClick={ desactivateUser }
                >
                    <Icon type="stop" />
                </Button>,
                <Button 
                    type="danger"
                    onClick={ showDeleteConfirm }
                >
                    <Icon type="delete" />
                </Button>
            ]}
        >
            <List.Item.Meta 
                avatar={ <Avatar src={ avatar ? avatar : NoAvatar } /> }
                title={`
                    ${ user.name ? user.name : '...' }
                    ${ user.lastname ? user.lastname : '...' }
                `}
                description={ user.email }
            />
        </List.Item>
    )
    
};

const UsersInactive = ( props ) => {

    const { usersInactive, setReloadUsers } = props;

    
    return (
        <List 
            className="users-active"
            itemLayout="horizontal"
            dataSource={ usersInactive }
            renderItem={ user => (<UserInactive user={ user } setReloadUsers={ setReloadUsers } />) }
        />
    )
};

const UserInactive = ( props ) => {
    const { user, setReloadUsers } = props;

    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        if (user.avatar) {
            getAvatarApi(user.avatar).then( response => {
                setAvatar(response);
            } )
        } else {
            setAvatar( null );
        }
    }, [user]);


    const activateUser = () => {
        const accessToken = getAccessTokenApi();

        activateUserApi( accessToken, user._id, true )
            .then( response => {
                notification["success"]({
                    message: response
                });
                setReloadUsers(true);
            } )
            .catch( err => {
                notification["error"]({
                    message: err
                });
            } );
    };

    const showDeleteConfirm = () => {
        const accessToken = getAccessTokenApi();

        confirm({
            title: "Eliminando usuario",
            content: `¿Estás seguro que quieres eliminar a ${ user.email }?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteUserApi( accessToken, user._id )
                .then( response =>{
                    notification["success"]({
                        message: response
                    });
                    setReloadUsers(true);
                } )
                .catch( err => {
                    notification["error"]({
                        message: err
                    });
                } )
            }
        })
    };
    

    return (
        <List.Item
            actions={[
                <Button 
                    type="primary"
                    onClick={ activateUser }
                >
                    <Icon type="check" />
                </Button>,
                <Button 
                    type="danger"
                    onClick={ showDeleteConfirm }
                >
                    <Icon type="delete" />
                </Button>
            ]}
        >
            <List.Item.Meta 
                avatar={ <Avatar src={ avatar ? avatar : NoAvatar } /> }
                title={`
                    ${ user.name ? user.name : '...' }
                    ${ user.lastname ? user.lastname : '...' }
                `}
                description={ user.email }
            />
        </List.Item>
    )
};
