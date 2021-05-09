import React from 'react';
import { Row, Col } from 'antd';
import { Icon } from '@ant-design/compatible';


import './NavigationFooter.scss';
import { Link } from 'react-router-dom';

export const NavigationFooter = () => {
    return (
        <Row className="navigation-footer">
            <Col md={ 24 }>
                <h3>Navegación</h3>
            </Col>
            <Col md={ 12 }>
                <RenderListLeft />
            </Col>
            <Col md={ 12 }>
                <RenderListRight />
            </Col>
        </Row>
    )
}


const RenderListLeft = () => {
    return (
        <ul>
            <li>
                <Link to=''>
                    <Icon type="book" /> Cursos Online
                </Link>
            </li>
            <li>
                <Link to=''>
                    <Icon type="code" /> Desarrollo web
                </Link>
            </li>
            <li>
                <Link to=''>
                    <Icon type="database" /> Base de datos
                </Link>
            </li>
            <li>
                <Link to=''>
                    <Icon type="right" /> Política de privacidad
                </Link>
            </li>
        </ul>
    )
};

const RenderListRight = () => {
    return (
        <ul>
            <li>
                <Link to=''>
                    <Icon type="hdd" /> Sistemas / Servidores
                </Link>
            </li>
            <li>
                <Link to=''>
                    <Icon type="appstore" /> CMS
                </Link>
            </li>
            <li>
                <Link to=''>
                    <Icon type="user" /> Portafolio
                </Link>
            </li>
            <li>
                <Link to=''>
                    <Icon type="right" /> Política de Cookies
                </Link>
            </li>
        </ul>
    )
};




 export default NavigationFooter;