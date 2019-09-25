const mapCategory = {
  health: 'Saúde',
  work: 'Trabalho',
  personal: 'Pessoal',
  shopping: 'Compras',
  book: 'Livros',
};

export const translateCategory = category => {
  return mapCategory[category];
};
