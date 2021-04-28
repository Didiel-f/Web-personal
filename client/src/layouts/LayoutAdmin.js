import React, { useState } from 'react';
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router';

import { MenuTop } from '../components/Admin/MenuTop/MenuTop';
import MenuSider from '../components/Admin/MenuSider/MenuSider';

import "./LayoutAdmin.scss";
import AdminSignIn from '../pages/Admin/SignIn';
import useAuth from '../hooks/useAuth';

export const LayoutAdmin = ( props ) => {

    const { routes } = props;
    const [menuCollapsed, setMenuCollapsed] = useState( false );
    const { Header, Content, Footer } = Layout;
    const { user, isLoading } = useAuth();   


    if ( !user && !isLoading ) {
        return (
            <>
                <Route path="/admin/login" component={ AdminSignIn } />
                <Redirect to="/admin/login" />
            </>
        )
    }


    if ( user && !isLoading ) {
        
        return (
            <Layout>
                <MenuSider menuCollapsed={ menuCollapsed } />
                <Layout 
                    className="layout-admin"
                    style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
                >
                    <Header className="layout-admin__header">
                        <MenuTop 
                            menuCollapsed={ menuCollapsed } 
                            setMenuCollapsed={ setMenuCollapsed } 
                        />
                    </Header>
                    <Content className="layout-admin__content">
                        <LoadRoutes routes={ routes } />
                    </Content>
                    <Footer className="layout-admin__footer">
                        Didiel Figueroa
                    </Footer>
                </Layout>
            </Layout>
        )
    }
    return null;
    
};


const LoadRoutes = ({ routes }) => {

    return (

        <Switch>
            {
                routes.map( ( route, index ) => (
                    <Route 
                        key={ index }
                        path={ route.path }
                        exact={ route.exact }
                        component={ route.component }
                    />
                ))
            }
        </Switch>
    );
};