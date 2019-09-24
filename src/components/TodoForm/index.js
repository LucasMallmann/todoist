import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { StyledForm } from './styles';

export default function TodoForm({ onClickCancel, todo }) {
  function handleSubmit(data) {}

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input name="todo" defaultValue={todo ? todo.task : ''} />
      <div>
        <button type="submit">Salvar</button>
        <button type="button" onClick={() => onClickCancel()}>
          Cancelar
        </button>
      </div>
    </StyledForm>
  );
}
