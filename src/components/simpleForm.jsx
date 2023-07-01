import React, {Component} from 'react';

class SimpleForm extends Component {
    state ={
        persons : this.props.persons,
    };
    handleChange = (e)=> {
        console.log(e.currentTarget);
        let s1 = { ...this.state };
        // if (e.currentTarget.name === "name") s1.persons["name"]= e.currentTarget.value;
        // if(e.currentTarget.name === "age") s1.persons["age"] = e.currentTarget.value;

        s1.persons[e.currentTarget.name ]= e.currentTarget.value;
        // s1.persons.name = e.currentTarget.value;
        this.setState(s1);

    };

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Handle Submit", this.state.persons);
        this.props.onSubmit(this.state.persons);
    };

    render() {
        let {name,age} =this.state.persons;
        return (
        <div className = "container">
            <h4>{this.props.edit ? "Edit Details" :"Enter detail of Persons"}</h4>
            <div className ="form-group">
                <label>Name</label>
                <input
                type="text"
                className ="form-control"
                id="name"
                name="name"
                value ={name}
                placeholder="Enter name"
                onChange = {this.handleChange}
                />
            </div>
           
            <div className ="form-group">
                <label>Age</label>
                <input
                type="text"
                className ="form-control"
                id="age"
                name="age"
                value ={age}
                placeholder="Enter Age"
                onChange = {this.handleChange}
                />
            </div>
            <button className ="btn btn-primary m-2" onClick={this.handleSubmit}>
               {this.props.edit ?"update":"Submit" } </button>
                
        </div>
        );
    }

}

export default SimpleForm;