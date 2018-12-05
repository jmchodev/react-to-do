 import React, { Component } from 'react';
 import './App.css';
 import ToDo from './components/ToDo.js';

 class App extends Component {
  constructor(props){
    super(props);
    /*assign initial state as an object with "todos" property, "todos" property 
    is an array of objects, each object has "description" & "isCompleted" as properties*/
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }      
      ],
      //store text input values in state
      newTodoDescription: ''
    }
  }

  /*method to handle new to-do input, accepts the event
  sets state of newToDoDescription to e.target.value
  e.target is the target element, the user text input*/
  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  //handleSubmit method accepts event data "e" as a parameter
  handleSubmit(e){
    //prevent default page reload on form submit
    e.preventDefault();
    //do nothing if the new description has no value
    if(!this.state.newToDoDescription) { return }
    //create new todo object to add to this.state.todos
    const newTodo = {description: this.state.newTodoDescription, isCompleted: false};
    //todos is set to a new array with new todo object added at the end
    //newTodoDescription is emptied upon creation of a new to-do item
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: ''});
  }

  //event handler as a class method for the checkbox response
toggleComplete(index){
  //slice() w/o arg simply copies the array
  const todos = this.state.todos.slice();
  //new variable todo assigned to individual to-do element
  const todo = todos[index];
  //if to-do already isCompleted? then make false, if not true
  todo.isCompleted = todo.isCompleted ? false : true;
  //pass the App component's state a new state object
  this.setState({todos: todos});
}

deleteToDo(index){
  //set a state that passes new array without the selected to-do item
  const delTodos = this.state.todos.filter(function (item){
    return item.index !== index});
  this.setState({todos: delTodos});
}

   render() {
     return (
       <div className="App">
        <ul> {/*the map function will iterate through the todos array
        it will return a new array of JSX elements to render into HTML*/}
          { this.state.todos.map( (todo, index) =>
          /*the map function takes arguments currentValue = todo, and index
          each ToDo attribute is assigned a unique key value using index*/
            <ToDo 
            key={index} 
            //description & isCompleted properties passed down as a prop from App 
            description={todo.description} 
            isCompleted={todo.isCompleted} 
            //event handler function passed down to ToDo
            /*to access a specific ToDo item, pass todo's index from map function
            and allow ToDo component to use index to modify appropriate to-do*/
            toggleComplete={ () => this.toggleComplete(index) }
            deleteToDo = {() => this.deleteToDo(index)} />
            )}
        </ul>
        {/*create new form with text input and submit button to create new to-do items
        to respond to those submissions, add "onSubmit" = an arrow function accepting e as arg
        then calls this.handleSubmit, "e" contains event data passed to function by browser*/}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          {/*set value to the new newTodoDescription inside state, to change value in UI: 
          actually change value in state through onChange event listener to the text input
          accepts event data "e" as parameter, then calls handleChange passing that "e"*/}
          <input type="text" value={this.state.newTodoDescription}  onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
       </div>
     );
   }
 }

 export default App;
