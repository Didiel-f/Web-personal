import React from 'react';
import { Row, Col } from 'antd';

import './MainBanner.scss'

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="main-banner__dark">
                <Row>
                    <Col lg={4} />
                    <Col lg={16} >
                        <h2>Proyectos con<br /> tecnologías web y móvil.</h2>
                        <h3>
                            Realizados de forma profesional con las mejores prácticas, siendo <br /> 
                            modernos y dinámicos.
                        </h3>
                    </Col>
                    <Col lg={4} />
                </Row>
            </div>
        </div>
    )
}

export default MainBanner;