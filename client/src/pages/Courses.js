import React, { useEffect, useState } from 'react';
import { Row, Col, Spin, notification } from 'antd'

import PresentationCourses from '../components/Web/Courses/PresentationCourses';
import CoursesList from '../components/Web/Courses/CoursesList';
import { getCoursesApi } from '../api/course';

export const Courses = () => {
    const [courses, setCourses] = useState(null);

    useEffect(() => {

        getCoursesApi()
            .then( response => {
                if ( response?.code !== 200 ) {
                    notification["warning"]({
                        message: response.message
                    })
                } else {
                    setCourses( response.courses )
                }
            } )
            .catch( () => {
                notification["warning"]({
                    message: "Error del servidor, intentelo más tarde."
                })
            } )
        
    }, [  ])
    
    return (
        <Row>
            <Col md={ 4 } />
            <Col md={ 16 } >
                <PresentationCourses />

                { 
                    !courses ? 
                        (
                            <Spin 
                                tip="Cargando cursos" 
                                style={{ textAlign: "center", width: "100%", padding: "20px" }}
                            />
                        ) 
                        : ( <CoursesList courses={ courses } />) 
                }
                
            </Col>
            <Col md={ 4 } />
        </Row>
    )
}
