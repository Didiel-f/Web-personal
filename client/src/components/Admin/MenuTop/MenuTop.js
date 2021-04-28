import React from 'react';
import { Button } from 'antd';
import { Icon } from '@ant-design/compatible';

import DidiLogo from '../../../assets/img/png/logo-white.png'

import "./MenuTop.scss";
import { logout } from '../../../api/auth';

export const MenuTop = ( props ) => {

    const { menuCollapsed, setMenuCollapsed } = props;

    
    
    const logoutUser = () => {
        logout();
        window.location.reload();
    };
    
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                    className="menu-top__left-logo"
                    src={ DidiLogo }
                    alt="Didiel Figueroa"
                />
                <Button type="link" onClick={ () => setMenuCollapsed( !menuCollapsed ) }>
                    <Icon type={ menuCollapsed ? "menu-fold" : "menu-unfold" } />
                </Button>
            </div>
            <div className="menu-top__right">
                <button type="link" onClick={ logoutUser }>
                    <Icon type="poweroff" />
                </button>
            </div>
        </div>
    )
}
