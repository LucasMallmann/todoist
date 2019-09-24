/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { MdAdd } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators as TodosActions } from '../../store/ducks/todos';

import { Container, TodoContainer } from './styles';
import Todo from '../../components/Todo';
import TodoForm from '../../components/TodoForm';

const todos = [
  {
    id: 1,
    text: 'Fazer Tarefa',
  },
  {
    id: 2,
    text: 'Fazer Tarefa',
  },
  {
    id: 3,
    text: 'Fazer Tarefa',
  },
  {
    id: 4,
    text: 'Fazer Tarefa',
  },
];

class Home extends Component {
  state = {
    selectedTodo: {},
    editable: false,
    add: false,
  };

  componentDidMount() {
    const { getTodosRequest } = this.props;
    getTodosRequest();
  }

  onClickUpdate = todo => {
    this.setState({
      selectedTodo: todo,
      editable: true,
    });
  };

  onClickCancel = () => {
    this.setState({
      selectedTodo: {},
      editable: false,
      add: false,
    });
  };

  render() {
    const { selectedTodo, editable, add } = this.state;
    const {
      todos: { data },
    } = this.props;

    return (
      <Container>
        <h1>Página inicial</h1>
        <TodoContainer>
          {data.map(todo =>
            selectedTodo.id === todo.id && editable ? (
              <TodoForm
                onClickCancel={() => this.onClickCancel()}
                todo={todo}
              />
            ) : (
              <Todo
                key={todo.id}
                todo={todo}
                onClickUpdate={() => this.onClickUpdate(todo)}
              />
            )
          )}
        </TodoContainer>

        {add ? (
          <TodoForm onClickCancel={() => this.onClickCancel()} />
        ) : (
          <button type="button" onClick={() => this.setState({ add: true })}>
            <div>
              <MdAdd size={18} color="#F00" />
            </div>
            <span>Adicionar Tarefa</span>
          </button>
        )}
      </Container>
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
)(Home);
