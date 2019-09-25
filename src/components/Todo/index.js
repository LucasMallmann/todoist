import React, { Component } from 'react';
import { MdClose, MdModeEdit } from 'react-icons/md';
import ToolTip from 'react-tooltip';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators as TodosActions } from '../../store/ducks/todos';

import { TodoItem, Text } from './styles';

import Checkbox from '../Checkbox';

class Todo extends Component {
  state = {
    checked: false,
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
    onClickUpdate: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { todo } = this.props;
    this.setState({
      checked: todo.completed,
    });
  }

  handleComplete = (e, todoSelected) => {
    const { updateTodo } = this.props;

    const todo = { ...todoSelected };

    if (e.target.checked) {
      todo.completed = true;
    } else {
      todo.completed = false;
    }

    updateTodo(todo);

    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    const { todo, onClickUpdate, removeTodo } = this.props;
    const { checked } = this.state;

    return (
      <TodoItem>
        <label>
          <Checkbox
            checked={checked}
            onChange={e => this.handleComplete(e, todo)}
          />
          <Text completed={todo.completed}>{todo.task}</Text>
        </label>

        <div>
          <MdModeEdit size={16} data-tip="Editar" onClick={onClickUpdate} />
          <MdClose
            size={16}
            data-tip="Deletar"
            onClick={() => removeTodo(todo.id)}
          />
          <ToolTip place="top" type="dark" effect="float" />
        </div>
      </TodoItem>
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
)(Todo);
