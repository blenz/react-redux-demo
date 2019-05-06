import React from 'react';
import { connect } from 'react-redux';

const PersonDetail = ({ person }) => {
  if (!person) {
    return <h3 className="col-8 text-center">No Person Selected</h3>;
  }

  return (
    <div className="col-8">
      <h3 className="text-center">Person Detail</h3>
      <div>
        <p>
          <span className="font-weight-bold">Id:</span> {person.id}
        </p>
        <p>
          <span className="font-weight-bold">Name:</span> {person.name}
        </p>
        <p>
          <span className="font-weight-bold">Age:</span> {person.age}
        </p>
        <p>
          <span className="font-weight-bold">Address:</span> {person.address}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { person: state.selectedPerson };
};

export default connect(mapStateToProps)(PersonDetail);
