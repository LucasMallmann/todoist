/* eslint-disable react/no-did-update-set-state */
/* eslint-disable operator-assignment */
import React, { Component } from 'react';
import {
  MdHome,
  MdDateRange,
  MdFavorite,
  MdWork,
  MdPerson,
  MdAddShoppingCart,
  MdBook,
} from 'react-icons/md';

import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators as TodosActions } from '../../store/ducks/todos';

import { Container, Navigation, Separator } from './styles';

const categories = ['health', 'work', 'personal', 'shopping', 'book'];

class Sidebar extends Component {
  state = {
    health: 0,
    work: 0,
    personal: 0,
    shopping: 0,
    book: 0,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.todos.data.length === this.props.todos.data.length) {
      return;
    }

    const reducer = (acc, category) => {
      acc[category] = this.countCategory(category);
      return acc;
    };

    const result = categories.reduce(reducer, {});

    this.setState(result);
  }

  /**
   * Count the category occurrences in the todo list
   * @param {String} category
   */
  countCategory = category => {
    const {
      todos: { data },
    } = this.props;
    const total = data.reduce((accumulator, todo) => {
      return accumulator + (todo.category === category);
    }, 0);

    return total;
  };

  render() {
    const { health, work, personal, shopping, book } = this.state;
    const total = this.props.todos.data.length;

    return (
      <Container>
        <ul>
          <Navigation to="/">
            <li>
              <div>
                <MdHome size={20} />
                <span>Página Principal</span>
              </div>
              <small>{total} itens</small>
            </li>
          </Navigation>
          <Navigation to="/">
            <li>
              <div>
                <MdDateRange size={20} />
                <span>Hoje</span>
              </div>
              <small>{total} itens</small>
            </li>
          </Navigation>
        </ul>

        <Separator />

        <ul>
          <Navigation to="?category=health">
            <li>
              <div>
                <MdFavorite size={20} color="#D93644" />
                <span>Saúde</span>
              </div>
              <small>{health} itens</small>
            </li>
          </Navigation>
          <Navigation to="/?category=work">
            <li>
              <div>
                <MdWork size={20} color="#223946" />
                <span>Trabalho</span>
              </div>
              <small>{work} itens</small>
            </li>
          </Navigation>
          <Navigation to="/?category=personal">
            <li>
              <div>
                <MdPerson size={20} color="#0367A6" />
                <span>Pessoal</span>
              </div>
              <small>{personal} itens</small>
            </li>
          </Navigation>
          <Navigation to="/?category=shopping">
            <li>
              <div>
                <MdAddShoppingCart size={20} color="#FF7830" />
                <span>Compras</span>
              </div>
              <small>{shopping} itens</small>
            </li>
          </Navigation>
          <Navigation to="/">
            <li>
              <div>
                <MdBook size={20} color="#02733E" />
                <span>Livros</span>
              </div>
              <small>{book} itens</small>
            </li>
          </Navigation>
        </ul>
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
)(withRouter(Sidebar));
