import React from 'react';
import AcademyLogo from '../../../../assets/img/png/academy-logo.png';

import './PresentationCourses.scss';

const PresentationCourses = () => {
    return (
        <div className="presentation-courses">
            <img src={ AcademyLogo } alt="Cursos Didiel Figueroa" />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p>
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            </p>
        </div>
    )
}

export default PresentationCourses;