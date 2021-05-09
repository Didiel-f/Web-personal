import React, { useEffect, useState } from 'react';
import { getCoursesApi } from '../../api/course';
import { CoursesList } from '../../components/Admin/Courses/CoursesList/CoursesList';


const Courses = () => {

    const [courses, setCourses] = useState([])
    const [reloadCourses, setReloadCourses] = useState(false);

    useEffect(() => {

        getCoursesApi().then( response => {
            setCourses( response.courses );
        } );
        setReloadCourses(false)
    }, [reloadCourses])
    
    return (
        <div className="courses">
            <CoursesList courses={ courses } setReloadCourses={ setReloadCourses } />
        </div>
    )
}


export default Courses;