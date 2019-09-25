import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { ActionCreators as TodosActions } from '../../store/ducks/todos';

import { StyledForm } from './styles';

class TodoForm extends Component {
  state = {
    task: '',
    update: false,
  };

  static propTypes = {
    todos: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf({
        id: PropTypes.number,
        task: PropTypes.string,
        category: PropTypes.string,
        completed: PropTypes.bool,
      }),
    }).isRequired,
    todo: PropTypes.shape({
      id: PropTypes.number,
      task: PropTypes.string,
      category: PropTypes.string,
      completed: PropTypes.bool,
    }),
    updateTodo: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func,
    addTodo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { todo } = this.props;

    if (todo) {
      this.setState({
        task: todo.task,
        update: true,
      });
    }

    this.task.focus();
  }

  handleSubmit = e => {
    e.preventDefault();

    let id = 1;

    const { data } = this.props.todos;
    const { update } = this.state;

    if (update) {
      const { todo } = this.props;

      const updatedTodo = {
        ...todo,
        task: this.state.task,
      };

      this.props.updateTodo(updatedTodo);
      this.props.onClickCancel();

      return;
    }

    const lastTodo = data[data.length - 1];
    const { task } = this.state;

    if (lastTodo) {
      id = lastTodo.id + 1;
    }

    const todo = {
      task,
      id,
    };

    this.props.addTodo(todo);
    this.props.onClickCancel();
  };

  render() {
    const { onClickCancel } = this.props;
    const { task } = this.state;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={e => this.setState({ task: e.target.value })}
          ref={input => {
            this.task = input;
          }}
        />
        <div>
          <button type="submit">Salvar</button>
          <button type="button" onClick={() => onClickCancel()}>
            Cancelar
          </button>
        </div>
      </StyledForm>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
