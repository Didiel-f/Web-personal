import React from 'react';
import LogoWhite from '../../../../assets/img/png/logo-white.png';
import SocialLinks from '../../SocialLinks/SocialLinks';


import './MyInfo.scss';

const MyInfo = () => {
    return (
        <div className="my-info">
            <img src={ LogoWhite } alt="Didiel Figueroa" />
            <h4>
                Entra en el mundo del desarrollo web, disfruta creando proyectos de todo tipo, deja que tu imaginación fluya y crea verdaderas maravillas!!
            </h4>
            <SocialLinks />
        </div>
    )
};



export default MyInfo;
