/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { MdAdd } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import { ActionCreators as TodosActions } from '../../store/ducks/todos';
import { translateCategory } from '../../utils/translate';

import { Container, TodoContainer } from './styles';
import Todo from '../../components/Todo';
import TodoForm from '../../components/TodoForm';

class Home extends Component {
  state = {
    selectedTodo: {},
    editable: false,
    add: false,
    filter: false,
    category: '',
    todos: [],
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
    getTodosRequest: PropTypes.func.isRequired,
    location: PropTypes.shape({
      search: PropTypes.string,
    }),
    moveTodo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getTodosRequest } = this.props;

    getTodosRequest();
    this.filterTodos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.filterTodos();
    }
  }

  filterTodos = () => {
    if (this.props.location.search) {
      const query = queryString.parse(this.props.location.search);

      if (!query.category) return;

      this.setState({
        ...this.state,
        filter: true,
        category: query.category,
      });
    } else {
      this.setState({
        ...this.state,
        filter: false,
        category: '',
      });
    }
  };

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
    const { selectedTodo, editable, add, category, filter } = this.state;
    const {
      todos: { data },
      moveTodo,
    } = this.props;

    return (
      <Container>
        {category ? (
          <h1>Tarefas para {translateCategory(category)}</h1>
        ) : (
          <h1>Página inicial</h1>
        )}

        <TodoContainer
          inlineStyle={{ marginTop: '20px' }}
          items={data}
          onChange={moveTodo}
          itemRenderer={todo =>
            selectedTodo.id === todo.id && editable ? (
              <TodoForm
                onClickCancel={() => this.onClickCancel()}
                todo={todo}
              />
            ) : filter && category ? (
              category === todo.category ? (
                <Todo
                  key={todo.id}
                  todo={todo}
                  onClickUpdate={() => this.onClickUpdate(todo)}
                />
              ) : null
            ) : (
              <Todo
                key={todo.id}
                todo={todo}
                onClickUpdate={() => this.onClickUpdate(todo)}
              />
            )
          }
        />

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
)(withRouter(Home));
