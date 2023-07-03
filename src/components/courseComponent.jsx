import React, { Component } from 'react';
import CourseForm from './courseForm';
class CourseComponent extends Component {
    state = {
        courses: [
            {courseName : "Javascript", faculty : "Hima" , lecture: 20},
            {courseName : "Python", faculty : "Rahul" , lecture: 10},
            {courseName : "React", faculty : "Ram" , lecture: 25},
            {courseName : "Java", faculty : "Himanshu" , lecture: 30},

        ],
        view : 0,// 0 to show person and button . 1 show form
        editCourseIndex : -1,

    };
    handleCourse = (course)=> {
        console.log("In Handle persons", course);
        let s1 = {...this.state};
        s1.courses.push(course);
        s1.view = 0;
        this.setState(s1);
    }
    showCourseForm=()=> {
        let s1 = {...this.state};
        s1.view =1;
        this.setState(s1);
    }
    editCourse = (index) => {
        let s1 = {...this.state};
        s1.view = 1;
        s1.editCourseIndex = index;
        this.setState(s1); 


    }
    render () {
        let course = {courseName : "", faculty : "", lecture:""}
        let {courses , view,  editCourseIndex} = this.state;
        return  view ===0 ? (
            <div className ="container">
                {courses.map((c1 ,index)=> (
                    <div className="row">
                        <div className ="col-3 border">{c1.courseName}</div>
                        <div className ="col-3 border">{c1.faculty}</div>
                        <div className ="col-3 border">{c1.lecture}</div>
                        <div className ="col-3 border"><button className ="btn btn-warning" onClick={()=>this.editCourse(index)}>Edit</button></div>
                        </div>
                    ))}
                    <button className ="btn btn-primary" onClick={()=>this.showCourseForm()}>Add New Course</button>
                
            </div>
        ):(
        <CourseForm course=
         {editCourseIndex >=0 ? courses [editCourseIndex] : course}
         onSubmit = {this.handleCourse}
         edit = {editCourseIndex >= 0}
         /> 
        );
    }
}
export default CourseComponent;