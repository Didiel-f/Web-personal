import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import AvatarPersona from '../../../assets/img/jpg/profilePicture.jpg';

import './ReviewsCourses.scss'

const ReviewsCourses = () => {
    return (
        <Row className="reviews-courses">
                <Col lg={ 4 } />
                <Col lg={ 16 } className="reviews-courses__title">
                    <h2>Forma parte de los +35 mil estudiantes que están aprendiendo con mis cursos.</h2>
                </Col>
                <Col lg={ 4 } />
                <Col lg={ 4 } />
                <Col lg={ 16 } >
                    <Row className="row-cards">
                        <Col md={  8} >
                            <CardReview 
                                name="Alonso Campos"
                                subtitle="Alumno de Udemy"
                                avatar={ AvatarPersona }
                                review="Un curso excelente, el propfesor explica detalladamente como funciona React, ahora estoy desarrollando mi proppia aplicación sin ningún tipo de propblema gracias al curso."
                            />
                        </Col>
                        <Col md={  8} >
                            <CardReview 
                                name="Alonso Campos"
                                subtitle="Alumno de Udemy"
                                avatar={ AvatarPersona }
                                review="Un curso excelente, el propfesor explica detalladamente como funciona React, ahora estoy desarrollando mi proppia aplicación sin ningún tipo de propblema gracias al curso."
                            />
                        </Col>
                        <Col md={  8} >
                            <CardReview 
                                name="Alonso Campos"
                                subtitle="Alumno de Udemy"
                                avatar={ AvatarPersona }
                                review="Un curso excelente, el propfesor explica detalladamente como funciona React, ahora estoy desarrollando mi proppia aplicación sin ningún tipo de propblema gracias al curso."
                            />
                        </Col>
                    </Row>
                    <Row className="row-cards">
                        <Col md={  8} >
                            <CardReview 
                                name="Alonso Campos"
                                subtitle="Alumno de Udemy"
                                avatar={ AvatarPersona }
                                review="Un curso excelente, el propfesor explica detalladamente como funciona React, ahora estoy desarrollando mi proppia aplicación sin ningún tipo de propblema gracias al curso."
                            />
                        </Col>
                        <Col md={  8} >
                            <CardReview 
                                name="Alonso Campos"
                                subtitle="Alumno de Udemy"
                                avatar={ AvatarPersona }
                                review="Un curso excelente, el propfesor explica detalladamente como funciona React, ahora estoy desarrollando mi proppia aplicación sin ningún tipo de propblema gracias al curso."
                            />
                        </Col>
                        <Col md={  8} >
                            <CardReview 
                                name="Alonso Campos"
                                subtitle="Alumno de Udemy"
                                avatar={ AvatarPersona }
                                review="Un curso excelente, el propfesor explica detalladamente como funciona React, ahora estoy desarrollando mi proppia aplicación sin ningún tipo de propblema gracias al curso."
                            />
                        </Col>
                    </Row>
                </Col>
                <Col lg={ 4 } />
        </Row>
    )
};


const CardReview = (props) => {
    const { name, subtitle, avatar, review } = props;
    const { Meta } = Card;

    return (
        <Card className="reviews-courses__card">
            <p>{ review }</p>
            <Meta 
                avatar={ <Avatar src={avatar} /> }
                title={ name }
                description={ subtitle }
            />
        </Card>
    )
};





export default ReviewsCourses;