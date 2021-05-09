import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Button, DatePicker, notification } from 'antd';
import { Icon } from '@ant-design/compatible';
import moment from 'moment';
import { Editor } from '@tinymce/tinymce-react';
import { getAccessTokenApi } from '../../../../api/auth';

 
import './AddEditPostForm.scss';
import { addPostApi, updatePostApi } from '../../../../api/post';

const AddEditPostForm = (props) => {
    const { setIsVisibleModal, setReloadPosts, post } = props;
    const [postData, setPostData] = useState({});

    useEffect(() => {
        if (post) {
            setPostData(post)
        } else {
            setPostData({})
        }
    }, [post]);

    const processPost = () => {

        const { title, url, description, date } = postData;

        if ( !title || !url || !description || !date ) {
            notification["error"]({
                message: "Todos los campos son obligatorios."
            });
        } else {

            if ( !post ) {
                addPost();
            } else {
                updatePost(post)
            }
        }
        
    };

    const addPost = () => {
        const token = getAccessTokenApi();

        addPostApi( token, postData )
            .then( response => {
                const typeNotification = response.code === 200 ? "success" : "warning";
                notification[typeNotification]({
                    message: response.message
                });
                setIsVisibleModal(false);
                setReloadPosts(true);
                setPostData({});
            } )
            .catch( () => {
                notification["error"]({
                    message: "Error del servidor, intentelo más tarde."
                });
            } );
    };
    
    const updatePost = (post) => {
        const token = getAccessTokenApi();

        updatePostApi( token, post._id, postData )
            .then( response => {
                const typeNotification = response.code === 200 ? "success" : "warning";
                notification[typeNotification]({
                    message: response.message
                });
                setIsVisibleModal(false);
                setReloadPosts(true);
                setPostData({});
            } )
            .catch( () => {
                notification["error"]({
                    message: "Error del servidor, intentelo más tarde."
                });
            } );
    };
    
    return (
        <div className="add-edit-post-form">
            <AddEditForm 
                postData={ postData } 
                setPostData={ setPostData } 
                post={ post } 
                processPost={ processPost }
            />
        </div>
    );
};


const AddEditForm = (props) => {
    const { postData, setPostData, post, processPost } = props;

    return (
        <Form 
            className="add-edit-post-form"
            onFinish={ processPost }
        >
            <Row gutter={ 24 }>
                <Col span={ 8 } >
                    <Input 
                        prefix={ <Icon type="font-size" /> }
                        placeholder="Titulo"
                        value={ postData.title }
                        onChange={ e => setPostData({ ...postData, title: e.target.value }) }
                    />
                </Col>
                <Col span={ 8 } >
                    <Input 
                        prefix={ <Icon type="link" /> }
                        placeholder="url"
                        value={ postData.url }
                        onChange={ e => setPostData({ ...postData, url: transformTextToUrl( e.target.value ) }) }

                    />
                </Col>
                <Col span={ 8 } >
                    <DatePicker 
                        style={{ width: "100%" }}
                        format="DD/MM/YYYY HH:mm:ss"
                        placeholder="Fecha de publicación"
                        value={ postData.date && moment(postData.date) }
                        onChange={ (e, value) => setPostData({ ...postData, date: moment( value, "DD/MM/YYYY HH:mm:ss" ).toISOString() }) }
                    />
                </Col>
            </Row>

            <Editor
                value={ postData.description ? postData.description : "" }
                init={{
                height: 550,
                width: "100%",
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
                }}
                onEditorChange={ e => setPostData({ ...postData, description: e }) }
            />

            
            <Button type="primary" htmlType="submit" className="btn-submit">
                { post ? "Actualizar post" : "Crear post" }
            </Button>
        </Form>
    )
};

const transformTextToUrl = (text) => {
    const url = text.replace(" ", "-");
    return url.toLowerCase();
};

export default AddEditPostForm;
