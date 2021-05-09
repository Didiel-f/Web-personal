import React, { useEffect, useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { Icon } from '@ant-design/compatible';


import './AddEditCourseForm.scss';
import { getAccessTokenApi } from '../../../../api/auth';
import { addCourseApi, updateCourseApi } from '../../../../api/course';

const AddEditCourseForm = (props) => {

    const { setIsVisibleModal, setReloadCourses, course } = props;
    const [courseData, setCourseData] = useState({});

    useEffect(() => {
        course ? setCourseData(course) : setCourseData({}) ;
    }, [ course ])
    
    const addCourse = e => {

        if ( !courseData.idCourse ) {
            notification["error"]({
                message: "El id del curso es obligatorio"
            });
        } else {
            const accessToken = getAccessTokenApi();

            addCourseApi( accessToken, courseData )
                .then( response => {
                    const typeNotification = response.code === 200 ? "success" : "warning";
                    notification[typeNotification]({
                        message: response.message
                    });
                    setIsVisibleModal(false);
                    setReloadCourses(true);
                    setCourseData({});
                } )
                .catch( () => {
                    notification["error"]({
                        message: "Error del servidor, intentelo más tarde."
                    });
                } )
        }
    };

    const updateCourse = (e) => {
        const accessToken = getAccessTokenApi();

        updateCourseApi( accessToken, course._id, courseData )
            .then( response => {
                const typeNotification = response.code === 200 ? "success" : "warning";
                notification[typeNotification]({
                    message: response.message
                });
                setIsVisibleModal( false );
                setReloadCourses( true );
                setCourseData({});
            } )
            .catch( () => {
                notification["error"]({
                    message: "Error del servidor, intentelo más tarde."
                });
            } );
        
    };
    
    return (
        <div className="add-edit-course-form">
            <AddEditForm 
                course={ course }
                addCourse={ addCourse }
                updateCourse={ updateCourse }
                courseData={ courseData }
                setCourseData={ setCourseData }
            />
        </div>
    );
};

const AddEditForm = (props) => {
    
    const { course, addCourse, updateCourse, courseData, setCourseData } = props

    return (

        <Form 
            className="form-add-edit" 
            onFinish={ course ? updateCourse : addCourse }
        >
            <Form.Item>
                <Input 
                    prefix={ <Icon type="key" />}
                    placeholder="ID del curso"
                    value={ courseData.idCourse }
                    onChange={ e => setCourseData({ ...courseData, idCourse: e.target.value }) }
                    disabled={ course ? true : false }
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={ <Icon type="link" />}
                    placeholder="Url del curso"
                    value={ courseData.link }
                    onChange={ e => setCourseData({ ...courseData, link: e.target.value }) }
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={ <Icon type="gift" />}
                    placeholder="Cupón de descuento"
                    value={ courseData.coupon }
                    onChange={ e => setCourseData({ ...courseData, coupon: e.target.value }) }
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={ <Icon type="dollar" />}
                    placeholder="Precio del curso"
                    value={ courseData.price }
                    onChange={ e => setCourseData({ ...courseData, price: e.target.value }) }
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    { course ? "Actualizar curso" : "Crear curso" }
                </Button>
            </Form.Item>
        </Form>
    )
};

export default AddEditCourseForm;