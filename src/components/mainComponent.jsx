import React, {Component} from 'react';
import SimpleForm from './simpleForm';

class MainComponent extends Component {

    state = {
        person : [
            {name:"Piyush", age: "34"},
            {name:"shah", age: "34"},
            {name:"Himanhu", age: "34"},
            {name:"Rohit", age: "34"},
            {name:"Nik", age: "34"},

        ],
        view : 0, // 0-show persons and button , 1 show form
        editPersonIndex : -1,
    };

    handlePersons = (persons) => {
        console.log("In handle persons", persons);
        let s1 = {...this.state};
        s1.editPersonIndex >=0 ? (s1.person[s1.editPersonIndex] = persons)
        
        :s1.person.push(persons);
        s1.view = 0;
        s1.editPersonIndex =-1;
        this.setState(s1);
    };

    showForm = ()=> {
        let s1 = {...this.state};
        s1.view = 1;
        this.setState(s1);
    };

    editPersons = (index) => {
        let s1 = {...this.state};
        s1.view = 1;
        s1.editPersonIndex = index;
        this.setState(s1);
    }


    render () {
        let persons = {name: "", age: ""}
        let {person,view,editPersonIndex} =this.state;

        return  view === 0 ? (
        <div className = "container">
            {person.map ((p1, index)=> (
                <div className ="row">
                    <div className="col-4 border">{p1.name}</div>
                    <div className="col-4 border">{p1.age}</div>
                    <div className="col-4 border"><button className="btn btn-warning btn-sm" onClick={()=>this.editPersons(index)}>Edit</button></div>
                    </div>
            ))}
            <button className ="btn btn-primary" onClick={()=>this.showForm()}>Add New Person</button>
        </div>
       ):(
        <SimpleForm persons =
        {editPersonIndex >= 0 ? person[editPersonIndex]: persons} 
        onSubmit={this.handlePersons}
        edit = {editPersonIndex >= 0}
        />
       
        );
    }
}
export default MainComponent;