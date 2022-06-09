/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import logo from './logo.svg';
import TodoForm from '../Components/TodoForm';
// import todos from './todos.json';
// console.log(todos)

class Dataemployer extends Component {
    constructor() {
        super();
        this.state={
            todos: [{
                "title": "Task 1",
                "responsible": "Mark",
                "description": "limpiar",
                "priority": "low"
            },
            {
                "title": "Task 2",
                "responsible": "Ryan",
                "description": "sacudir",
                "priority": "medium"
            },
            {
                "title": "Task 3",
                "responsible": "EliezerP",
                "description": "coletear",
                "priority": "hight"
            }
        ]
        }
        this.handleAddTodo=this.handleAddTodo.bind(this);

    }
    handleAddTodo(todo) {
        this.setState({
            todos:[...this.state.todos, todo]
        })
    }

    delete() {
        alert("Elimina la Tarea")
    }

    render() {
        const Todos=this.state.todos.map((todo, i) => {
            return (
                <div className="col-md-2">
                    <div className="card mt-2" key={i}>
                        <div className="card-header navbar-dark bg-dark text-white" >
                            <h3>{todo.title}</h3>
                            <span>
                                {todo.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{todo.description}</p>
                            <p><b>{todo.responsible}</b></p>
                        </div>
                        <div className="card-fooder">
                            <button className="btn btn-primary" >
                                Delete
                            </button>
                        </div>
                    </div>            
                </div>
            )
        })
                
        // console.log(Todos)
        return(
            <div>
                
                <nav className="App-header">
                    <a>Task: </a>
                    {this.state.todos.length}
                </nav>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-3">
                        <img src = { logo } className = "App-logo" alt = "logo"/>    
                            <TodoForm onAddTodo={this.handleAddTodo}/>
                        </div>
                        {Todos}
                    </div>
                </div>

            </div>
        );
    }
}

export default Dataemployer;