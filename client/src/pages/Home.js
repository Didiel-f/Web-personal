import React from 'react';
import HomeCourses from '../components/Web/HomeCourses';
import MainBanner from '../components/Web/MainBanner';
import HowMyCoursesWork from '../components/Web/HowMyCoursesWork';
import ReviewsCourses from '../components/Web/ReviewsCourses';


export const Home = () => {
    return (
        <>
        <MainBanner />
        <HomeCourses />
        <HowMyCoursesWork />
        <ReviewsCourses />
        </>
    );
};
