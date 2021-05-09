import React from 'react';
import { Row, Col } from 'antd';
import { Route, Switch } from 'react-router';
import MenuTop from '../components/Web/MenuTop/MenuTop';
import Footer from '../components/Web/Footer/Footer';

import "./LayoutBasic.scss";


export const LayoutBasic = ({ routes }) => {
    // const { routes } = props;

    return (
        <>
            <Row>
                <Col lg={4} />
                <Col lg={16}>
                    <MenuTop />
                </Col>
                <Col lg={4} />
            </Row>
            <LoadRoutes routes={ routes } />
            <Footer />
        </>
    );
}

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
                ) )
            }
        </Switch>
    );
};
