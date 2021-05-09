import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import nodeJs from '../../../assets/img/jpg/NODEJS.png';
import reactNative from '../../../assets/img/jpg/react-native.jpg';
import javaScript from '../../../assets/img/jpg/javascript-es6.jpg';
import mongoDb from '../../../assets/img/jpg/mongodb.jpg';
import AntdBootstrap from '../../../assets/img/jpg/Antd&Bootstrap.jpg';
import gitImage from '../../../assets/img/jpg/git-image.png';

import './HomeCourses.scss'

const HomeCourses = () => {
    return (
        <Row className="home-courses">
            <Col lg={ 24 } className="home-courses__title">
                <h2>Ampliando mis habilidades cada día</h2>
            </Col>
            <Col lg={ 4 } />
            <Col lg={ 16 } >
                <Row className="row-courses">
                    <Col md={ 6 }>
                        <CardCourse
                            image={ nodeJs }
                            title="Node JS"
                            subtitle="Intermedio - Node/Javascript"
                            link="https://fb.com"
                        />
                    </Col>
                    <Col md={ 6 }>
                        <CardCourse
                            image={ reactNative }
                            title="React JS"
                            subtitle="Intermedio - React/Javascript"
                            link="https://fb.com"
                        />
                    </Col>
                    <Col md={ 6 }>
                        <CardCourse
                            image={ javaScript }
                            title="Javascript ES6"
                            subtitle="Avanzado - Javascript"
                            link="https://fb.com"
                        />
                    </Col>
                    <Col md={ 6 }>
                        <CardCourse
                            image={ mongoDb }
                            title="Mongo DB"
                            subtitle="Intermedio - MongoDB"
                            link="https://fb.com"
                        />
                    </Col>
                </Row>
                <Row className="row-courses">
                    <Col md={ 6 }>
                        <CardCourse
                            image={ AntdBootstrap }
                            title="Antd & Bootstrap"
                            subtitle="Intermedio - Antd | Bootstrap"
                            link="https://fb.com"
                        />
                    </Col>
                    <Col md={ 6 } />
                    <Col md={ 6 } />
                    <Col md={ 6 }>
                        <CardCourse
                            image={ gitImage }
                            title="GIT"
                            subtitle="Básico - Git"
                            link="https://fb.com"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={ 4 } />
            <Col lg={ 24 } className="home-courses__more">
                <Link to="/courses">
                    <Button>Ver más</Button>
                </Link>
            </Col>
        </Row>
    )
}

const CardCourse = (props) => {
    const { image, title, subtitle, link } = props;
    const { Meta } = Card;

    return (
        <a href={ link } target="_blank" rel="noopener noreferrer">
            <Card
                className="home-courses__card"
                cover={ <img src={ image } alt={ title } /> }
                actions={[<Button>INGRESAR</Button>]}
            >
                <Meta title={ title } description={ subtitle } />
            </Card>
        </a>
    );
};












export default HomeCourses;
