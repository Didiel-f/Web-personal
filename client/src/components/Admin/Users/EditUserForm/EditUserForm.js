import React, { useCallback, useState } from 'react';
import { Avatar, Form, Input, Select, Button, Row, Col } from 'antd';
import { Icon } from '@ant-design/compatible';
import { useDropzone } from 'react-dropzone';
import NoAvatar from '../../../../assets/img/png/no-avatar.png';

import './EditUserForm.scss';

export const EditUserForm = ( props ) => {

    const { user } = props;
    const [avatar, setAvatar] = useState( null );

    
    return (
        <div>
            <UploadAvatar avatar={ avatar } setAvatar={ setAvatar } />
            <h2>{ user.email }</h2>
        </div>
    );
};


const UploadAvatar = ( props ) => {
    const { avatar, setAvatar } = props;

    const onDrop = useCallback(
        acceptedFiles => {
            const file = acceptedFiles[0];
            setAvatar({ file, preview: URL.createObjectURL(file) });
        },
        [ setAvatar ]
    );

    const { getRootProps, getInputProps, IsDragActive } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop
    });


    return (
        <div className="upload-avatar" {...getRootProps({refKey: 'innerref'})} >
            <Input { ...getInputProps() } />
            { IsDragActive 
                ? 
                    (
                        <Avatar size={ 150 } src={ NoAvatar } />
                    ) 
                :
                    (
                        <Avatar size={ 150 } src={ avatar ? avatar.preview : NoAvatar } />
                    ) 
            }
        </div>
    );
    
};