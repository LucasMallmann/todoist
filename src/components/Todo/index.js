import React from 'react';
import { MdClose, MdModeEdit } from 'react-icons/md';
import ToolTip from 'react-tooltip';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators as TodosActions } from '../../store/ducks/todos';

import { TodoItem, Text } from './styles';

import Checkbox from '../Checkbox';

function Todo({ todo, onClickUpdate, removeTodo }) {
  return (
    <TodoItem>
      <label>
        <Checkbox checked={false} onChange={() => console.log('oi')} />
        <Text>{todo.task}</Text>
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

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
