import React from 'react';
import { MdClose, MdModeEdit } from 'react-icons/md';
import ToolTip from 'react-tooltip';

import { TodoItem, Text } from './styles';

import Checkbox from '../Checkbox';

export default function Todo({ todo, onClickUpdate, onClickCancel }) {
  return (
    <TodoItem>
      <label>
        <Checkbox checked onChange={() => console.log('oi')} />
        <Text>{todo.task}</Text>
      </label>

      <div>
        <MdModeEdit size={16} data-tip="Editar" onClick={onClickUpdate} />
        <MdClose size={16} data-tip="Deletar" />
        <ToolTip place="top" type="dark" effect="float" />
      </div>
    </TodoItem>
  );
}
