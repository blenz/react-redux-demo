export const selectPerson = person => {
  return {
    type: 'SELECT_PERSON',
    payload: person
  };
};

export const clearPerson = () => {
  return {
    type: 'CLEAR_PERSON',
    payload: null
  };
};
