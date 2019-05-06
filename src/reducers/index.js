import { combineReducers } from 'redux';

const personReducer = () => {
  return [
    { id: 1, name: 'Jim', Age: 10, Address: '1000 Test St' },
    { id: 2, name: 'Bob', Age: 20, Address: '2000 Test St' },
    { id: 3, name: 'Hope', Age: 30, Address: '3000 Test St' },
    { id: 4, name: 'Ken', Age: 40, Address: '4000 Test St' },
    { id: 5, name: 'Stacey', Age: 40, Address: '5000 Test St' }
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
