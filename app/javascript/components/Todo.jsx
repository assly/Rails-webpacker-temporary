/*eslint-env node*/
/*global axios */

import React from 'react'
import PropTypes from 'prop-types'

// Begin Declaration component TodoItem
function TodoItem(props) {
  return (
    <div className="row todo-item">
      <p className="column todo-item-content tm">{props.content}</p>
      <button
        className="column column-20 button button-outline todo-item-finish tm"
        onClick={props.clickHandler}
      >
        Finish!
      </button>
    </div>
  );
}
// End dec.

function CSRFTokenVerify(props) {
  axios.defaults.headers.common['X-CSRF-Token'] = props.token;
  return <input type="hidden" name="authenticity_token" value={props.token} readOnly={true} />
}

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(props.todos),
      newTodo: ''
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  handleCreate() {
    axios.post('/todos', {
      todo: { content: this.state.newTodo }
    })
    // BE CAREFUL: 'this' points Todo component (not receiver 'axios')
    .then((response) => {
      console.log('Created.');

      this.setState({
        todos:  [{
                  id: response.data.id,
                  content: this.state.newTodo,
                  finish: false
                }].concat(this.state.todos),
        newTodo: ''
      });
    })
    .catch(function(_error) {
      console.log('Bad request.');
    });
  }

  /**
   * [handleDestroy]
   * @param  {[Integer]} todoId      [todo's id which is Database's id; to delete data from Database]
   * @param  {[Integer]} statesIndex [todo's index which is this.state.todos' index; to delete todo from Todo lists' page]
   * @return nothing
   */
  handleDestroy(todoId, statesIndex) {
    const deletedTodos = this.state.todos;

    deletedTodos.splice(statesIndex, 1);
    this.setState(deletedTodos);

    axios.delete(`/todos/${todoId}`)
    .then(function(_response) {
      console.log('Deleted.');
    })
    .catch(function(_error) {
      console.log('Somethings wrong.');
    });
  }

  render() {
    const lists = this.state.todos.map((todo, index) => {
      if (!todo.finish) {
        return (
          <TodoItem
            key={index}
            content={todo.content}
            clickHandler={() => this.handleDestroy(todo.id, index)}
          />
        );
      }
    });

    return (
      <div className="todo-wrapper">
        <div className="todo-form">
          <CSRFTokenVerify token={this.props.csrf_token} />
          <label>
            Todo:
            <input type="text" value={this.state.newTodo} onChange={this.handleChange} />
          </label>
          <button onClick={this.handleCreate} className="button">Add!</button>
        </div>
        <hr />
        {lists}
      </div>
    );
  }
}
