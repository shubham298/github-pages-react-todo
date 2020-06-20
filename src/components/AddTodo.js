import React, { Component } from 'react'
import propTypes from 'prop-types'
export class AddTodo extends Component {
    state = {
        title:''
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title:''})
    }
    render() {
        return (
            
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>

            <input type="text" style={{flex:'10',padding:'5px'}}
             name="title" placeholder="add todo..." onChange={this.onChange}></input>

            <input type="submit" value="Submit" className="btn" style={{flex:'1'}} ></input>

            </form>
        )
    }
}
AddTodo.propTypes ={
    addTodo:propTypes.func.isRequired,
 }
export default AddTodo
