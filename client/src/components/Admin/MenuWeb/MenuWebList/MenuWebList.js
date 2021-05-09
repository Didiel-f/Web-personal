import React, { useEffect, useState } from 'react';
import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd';
import { Icon } from '@ant-design/compatible';
import { Modal } from '../../../Modal/Modal';
import DragSortableList from 'react-drag-sortable';

import { getAccessTokenApi } from '../../../../api/auth';
import { activateMenuApi, deleteMenuApi, updateMenuApi } from '../../../../api/menu';
import AddMenuWebForm from '../AddMenuWebForm';
import EditMenuWebForm from '../EditMenuWebForm';

import "./MenuWebList.scss";

const { confirm } = ModalAntd;

const MenuWebList = ( props ) => {
    const { menu, setReloadMenuWeb } = props;
    const [listItems, setListItems] = useState([])
    const [isVisibleModal, setIsVisibleModal] = useState( false );
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    

    useEffect(() => {
        const listItemsArray = [];
        menu.forEach( item => {
            listItemsArray.push({
                content: (
                    <MenuItem 
                        item={ item } 
                        activateMenu={ activateMenu } 
                        editMenuWebModal={ editMenuWebModal }
                        deleteMenu={ deleteMenu }
                    />
                )
            });
        });
        setListItems(listItemsArray);
    }, [ menu ]);

    const activateMenu = ( menu, status ) => {
        const accessToken = getAccessTokenApi();
        activateMenuApi( accessToken, menu._id, status ).then( response => {
            notification["success"]({
                message: response
            })
        } )
    }

    const onSort = ( sortedList, dropEvent ) => {
        const accessToken = getAccessTokenApi();

        sortedList.forEach( item => {
            const { _id } = item.content.props.item;
            const order = item.rank;
            updateMenuApi( accessToken, _id, { order } );
        } );
        
    };

    const addMenuWebModal = () => {
        setIsVisibleModal( true );
        setModalTitle("Creando nuevo menú");
        setModalContent(
            <AddMenuWebForm
                setIsVisibleModal={ setIsVisibleModal }
                setReloadMenuWeb={ setReloadMenuWeb }
            />
        );
    };

    const deleteMenu = (menu) => {
            const accessToken = getAccessTokenApi();
    
            confirm({
                title: "Eliminando menú",
                content: `Estás seguro que quieres eliminar el menú ${ menu.title }?`,
                okText: "Eliminar",
                okType: "danger",
                cancelText: "Cancelar",
                onOk() {
                    deleteMenuApi( accessToken, menu._id )
                        .then( response => {
                            notification["success"]({
                                message: response
                            });
                            setReloadMenuWeb( true );
                        } )
                        .catch( err => {
                            notification["error"]({
                                message: "Error del servidor, intentelo más tarde."
                            });
                        } );
                }
            });
        };

    const editMenuWebModal = ( menu ) => {
        setIsVisibleModal( true );
        setModalTitle(`Editando menu: ${ menu.title }`);
        setModalContent(
            <EditMenuWebForm 
                setIsVisibleModal={ setIsVisibleModal }
                setReloadMenuWeb={ setReloadMenuWeb }
                menu={ menu }
            />
        );
    };

    
    return (
        <div className="menu-web-list">
            <div className="menu-web-list__header">
                <Button type="primary" onClick={ addMenuWebModal }>Crear menú</Button>
            </div>

            <div className="menu-web-list__items">
                <DragSortableList items={ listItems } onSort={ onSort } type="vertical" />
            </div>

            <Modal
                title={ modalTitle }
                isVisible={ isVisibleModal }
                setIsVisible={ setIsVisibleModal }
            >
                { modalContent }
            </Modal>
            
        </div>
    );
};

const MenuItem = ( props ) => {
    const { item, activateMenu, editMenuWebModal, deleteMenu } = props;

    

    
    return (
        <List.Item
            actions={[
                <Switch 
                    defaultChecked={ item.active } 
                    onChange={ e => activateMenu( item, e ) }
                />,
                <Button type="primary" onClick={ () => editMenuWebModal( item ) } >
                    <Icon type="edit" />
                </Button>,
                <Button type="danger" onClick={ () => deleteMenu( item ) }>
                    <Icon type="delete" />
                </Button>

            ]}
        >
            <List.Item.Meta title={ item.title } description={ item.url } />
        </List.Item>
    );
};

export default MenuWebList;