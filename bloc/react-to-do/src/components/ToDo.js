import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
      {/*isCompleted property is rendered as value of "checked" property there's 
      no way to put the event listened here, as we can't move data to parent*/}  
      {/*onChange event listener accesses the toggleComplete function as props
      now we have a child component calling function of a parent component*/}    
      <input type="checkbox" checked={this.props.isCompleted} onChange={this.props.toggleComplete}/>
      {/*now, we can access those props through the this.props object*/}
      <span>{ this.props.description }</span>
      <button type='button' onClick={this.props.deleteToDo}>Delete</button>
      </li>
    );
  }
}

export default ToDo;
