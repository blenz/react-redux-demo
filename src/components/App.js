import React from 'react';
import PersonList from './PersonList';
import PersonDetail from './PersonDetail';

const App = () => {
  return (
    <div className="row">
      <PersonList />
      <PersonDetail />
    </div>
  );
};

export default App;
