import React from 'react';
import { Input } from '@rocketseat/unform';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators as TodosActions } from '../../store/ducks/todos';

import { StyledForm } from './styles';

function TodoForm({ onClickCancel, todo, addTodo, todos }) {
  function handleSubmit({ task }) {
    let id = 1;

    const { data } = todos;
    const lastTodo = data[data.length - 1];

    if (lastTodo) {
      id = lastTodo.id + 1;
    }

    const todo = {
      task,
      id,
    };

    addTodo(todo);
    onClickCancel();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input name="task" defaultValue={todo ? todo.task : ''} />
      <div>
        <button type="submit">Salvar</button>
        <button type="button" onClick={() => onClickCancel()}>
          Cancelar
        </button>
      </div>
    </StyledForm>
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
)(TodoForm);
