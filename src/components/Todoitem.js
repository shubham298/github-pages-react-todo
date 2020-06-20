import React, { Component } from 'react'
import propTypes from 'prop-types'
export class Todoitem extends Component {

    getStyle=()=>{
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #aac dotted',
            textDecoration: this.props.todo.completed ? 'line-through':'none'
        }
    }
    delStyle=()=>{
        return{
                backgroundColor:'#f44f',
                padding:'5px 10px',
                display:'inline',
                color:'white',
                borderRadius:'50%',
                cursor:'pointer',
                float:'right'
        }
    }
   

    render() {
        const {id,title}=this.props.todo

        return (
            <div style={this.getStyle()}>
            <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}  
            {title}
            {''}
            <button style={this.delStyle()} type="button" 
            onClick={this.props.delItem.bind(this,id)} >x</button>
            </p>
            </div>
        )
    }
}
Todoitem.propTypes ={
   todo:propTypes.object.isRequired,
   markComplete:propTypes.func.isRequired,
   delItem:propTypes.func.isRequired
}
export default Todoitem
