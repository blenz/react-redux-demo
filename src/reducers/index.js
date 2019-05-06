import { combineReducers } from 'redux';

const personReducer = () => {
  return [
    { name: 'Jim', Age: 10, Address: '1000 Test St' },
    { name: 'Bob', Age: 20, Address: '2000 Test St' },
    { name: 'Hope', Age: 30, Address: '3000 Test St' },
    { name: 'Ken', Age: 40, Address: '4000 Test St' },
    { name: 'Stacey', Age: 40, Address: '5000 Test St' }
  ];
};

const selectedPersonReducer = (person, action) => {
  switch (action.type) {
    case 'SELECT_PERSON':
      return action.payload;
    default:
      return person;
  }
};

export default combineReducers({
  person: personReducer,
  selectedPerson: selectedPersonReducer
});
