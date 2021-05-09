import React from 'react';
import { Row, Col, Card } from 'antd';
import { ClockCircleOutlined, CameraOutlined, DesktopOutlined, PlayCircleOutlined, ReadOutlined, LineChartOutlined } from '@ant-design/icons';

import './HowMyCoursesWork.scss';


const HowMyCoursesWork = () => {
    return (
        <Row className="how-my-courses-work">
            <Col lg={ 24 } className="how-my-courses-work__title">
                <h2>Un poco sobre mi</h2>
                <h3>
                    Estás son algunas cosas en las que suelo pasar el tiempo.
                </h3>
            </Col>
            <Col lg={ 4 } />
            <Col lg={ 16 } >
                <Row className="row-cards">
                    <Col md={ 8 } >
                        <CardInfo 
                            icon={ <ClockCircleOutlined /> }
                            title="Mañanas productivas"
                            description="Suelo despertar temprano y que la mañana sea lo más productiva posible, así sin importar lo que pase el resto del día podré estar tranquilo."
                        />
                    </Col>
                    <Col md={ 8 } >
                        <CardInfo 
                            icon={ <CameraOutlined /> }
                            title="Fotografía y video"
                            description="Me gusta hacer videos y fotografías con mi GoPro y celular. Para editar uso Adobe premier, Photoshop, Lightroom.  "
                        />
                    </Col>
                    <Col md={ 8 } >
                        <CardInfo 
                            icon={ <DesktopOutlined /> }
                            title="Aprendizaje"
                            description="Siempre estoy consumiendo contenido de Udemy, tutoriales de Youtube y en grupos de Facebook donde puedo responder a dudas."
                        />
                    </Col>
                </Row>
                <Row className="row-cards">
                    <Col md={ 8 } >
                        <CardInfo 
                            icon={ <PlayCircleOutlined /> }
                            title="Videojuegos"
                            description="De vez en cuando juego League of Legends, Fortnite, Wild Rift y también me conecto en chess.com a subir mi elo de 650 jajaja."
                        />
                    </Col>
                    <Col md={ 8 } >
                        <CardInfo 
                            icon={ <ReadOutlined /> }
                            title="Lectura"
                            description="Mi genero favorito de literatura es la clásica, última lectura: Tetralogía de 	&quot;Los cantos de Hyperion&quot;"
                        />
                    </Col>
                    <Col md={ 8 } >
                        <CardInfo 
                            icon={ <LineChartOutlined /> }
                            title="Inversiones"
                            description="¿Mi portaolio? Ethereum, Bitcoin, Tesla, Apple, Dogecoin, Basic Attention Token. Proyetos en los que de verdad creo."
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={ 4 } />
        </Row>
    )
};




const CardInfo = (props) => {
    const { icon, title, description } = props;
    const { Meta } = Card;

    return (
        <Card className="how-my-courses-work__card">
            {icon}
            <Meta title={ title } description={ description } />
        </Card>
    );
};





export default HowMyCoursesWork;