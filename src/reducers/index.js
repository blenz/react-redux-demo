import { combineReducers } from 'redux';

const personReducer = () => {
  return [
    { id: 1, name: 'Jim', age: 10, address: '1000 Test St' },
    { id: 2, name: 'Bob', Age: 20, address: '2000 Test St' },
    { id: 3, name: 'Hope', age: 30, address: '3000 Test St' },
    { id: 4, name: 'Ken', age: 40, address: '4000 Test St' },
    { id: 5, name: 'Stacey', age: 40, address: '5000 Test St' }
  ];
};

const selectedPersonReducer = (selectedPerson = null, action) => {
  switch (action.type) {
    case 'SELECT_PERSON':
      return action.payload;
    default:
      return selectedPerson;
  }
};

export default combineReducers({
  people: personReducer,
  selectedPerson: selectedPersonReducer
});
