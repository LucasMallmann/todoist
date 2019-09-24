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

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators as TodosActions } from '../../store/ducks/todos';

import { Container, Navigation, Separator } from './styles';

const categories = {
  health: 'health',
  work: 'work',
  personal: 'personal',
  shopping: 'shopping',
};

class Sidebar extends Component {
  state = {
    health: 0,
    work: 0,
    personal: 0,
    shopping: 0,
  };

  componentDidMount() {
    const { todos: { data } } = this.props;
    console.log(this.props);
  }

  splitByCategory = () => {

  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
  }

  render() {
    return (
      <Container>
        <ul>
          <Navigation to="/" active>
            <li>
              <div>
                <MdHome size={20} />
                <span>Página Principal</span>
              </div>
              <small>3 itens</small>
            </li>
          </Navigation>
          <Navigation to="/">
            <li>
              <div>
                <MdDateRange size={20} />
                <span>Hoje</span>
              </div>
              <small>3 itens</small>
            </li>
          </Navigation>
        </ul>

        <Separator />

        <ul>
          <Navigation to="/">
            <li>
              <div>
                <MdFavorite size={20} color="#D93644" />
                <span>Saúde</span>
              </div>
              <small>3 itens</small>
            </li>
          </Navigation>
          <Navigation to="/">
            <li>
              <div>
                <MdWork size={20} color="#223946" />
                <span>Trabalho</span>
              </div>
              <small>3 itens</small>
            </li>
          </Navigation>
          <Navigation to="/">
            <li>
              <div>
                <MdPerson size={20} color="#0367A6" />
                <span>Pessoal</span>
              </div>
              <small>3 itens</small>
            </li>
          </Navigation>
          <Navigation to="/">
            <li>
              <div>
                <MdAddShoppingCart size={20} color="#FF7830" />
                <span>Compras</span>
              </div>
              <small>3 itens</small>
            </li>
          </Navigation>
          <Navigation to="/">
            <li>
              <div>
                <MdBook size={20} color="#02733E" />
                <span>Livros</span>
              </div>
              <small>3 itens</small>
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
)(Sidebar);
