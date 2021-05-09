import { Row, Col } from 'antd';
import React from 'react';
import { useParams } from 'react-router';
import PostInfo from '../components/Web/Blog/PostInfo/PostInfo';
import PostListWeb from '../components/Web/Blog/PostListWeb/PostListWeb';

export const Blog = (props) => {
    const { location, history } = props;
    const { url } = useParams();
    
    return (
        <Row>
            <Col md={ 4 } />
            <Col md={ 16 } >
                { url ? <PostInfo url={ url } /> : <PostListWeb location={ location } history={ history } /> }
            </Col>
            <Col md={ 4 } />
        </Row>
    )
}
