import React, { useState } from 'react';
import {
  MdHome,
  MdDateRange,
  MdFavorite,
  MdWork,
  MdPerson,
  MdAddShoppingCart,
  MdBook,
} from 'react-icons/md';

import { Container, Navigation, Separator } from './styles';

const Sidebar = () => {
  const [active, changeActive] = useState(true);

  return (
    <Container>
      <ul>
        <Navigation to="/" active={active}>
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
};

export default Sidebar;
