import React from 'react';
import { Row, Col, Layout } from 'antd';

import './Footer.scss';
import MyInfo from './MyInfo/MyInfo';
import NavigationFooter from './NavigationFooter/NavigationFooter';
import { Newsletter } from '../Newsletter/Newsletter';

const Footer = () => {
    const { Footer } = Layout;
    
    return (
        <Footer className="footer">
            <Row>
                <Col md={ 4 } />
                <Col md={ 16 } >
                    <Row>
                        <Col md={ 8 }>
                            <MyInfo />
                        </Col>
                        <Col md={ 8 }>
                            <NavigationFooter />
                        </Col>
                        <Col md={ 8 }>
                            <Newsletter />
                        </Col>
                    </Row>
                    <Row className="footer__copyright">
                        <Col md={ 12 } >2021 ALL RIGHTS RESERVED</Col>
                        <Col md={ 12 } >DIDIEL FIGUEROA | DESARROLLADOR WEB</Col>
                    </Row>
                </Col>
                <Col md={ 4 } />
            </Row>
        </Footer>
    )
}


export default Footer;
