import React, {Component} from 'react';

class CourseForm extends Component {
    state ={
        course : this.props.course,
    };
    handleChange = (e)=> {
        
        let s1 = { ...this.state };
        // if (e.currentTarget.name === "courseName") s1.course["courseName"]= e.currentTarget.value;
        // if(e.currentTarget.name === "faculty") s1.course["faculty"] = e.currentTarget.value;
        // if(e.currentTarget.name === "lecture") s1.course["lecture"] = e.currentTarget.value;

        s1.course[e.currentTarget.name ]= e.currentTarget.value;
        // s1.course.name = e.currentTarget.value;
        
        this.setState(s1);

    };

    handleSubmit = (e)=>{
        e.preventDefault();
        
        this.props.onSubmit(this.state.course);
    };

    render() {
        let {courseName,faculty,lecture} =this.state.course;
        return (
        <div className = "container">
            <h4>{this.props.edit ? "Edit Details" :"Enter detail of ourse"}</h4>
            <div className ="form-group">
                <label>Course Name</label>
                <input
                type="text"
                className ="form-control"
                id="courseName"
                name="courseName"
                value ={courseName}
                placeholder="Enter course detail"
                onChange = {this.handleChange}
                />
            </div>
           
            <div className ="form-group">
                <label>Faculty</label>
                <input
                type="text"
                className ="form-control"
                id="faculty"
                name="faculty"
                value ={faculty}
                placeholder="Enter Faculty name"
                onChange = {this.handleChange}
                />
            </div>
            <div className ="form-group">
                <label>Lecture</label>
                <input
                type="number"
                className ="form-control"
                id="lecture"
                name="lecture"
                value ={lecture}
                placeholder="Enter lecture number"
                onChange = {this.handleChange}
                />
            </div>
            <button className ="btn btn-primary m-2" onClick={this.handleSubmit}>
               {this.props.edit ?"update":"Submit" } </button>
                
        </div>
        );
    }

}
export default CourseForm;