import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPerson, clearPerson } from '../actions';

class PersonList extends Component {
  renderPeople() {
    return this.props.people.map(person => {
      return (
        <li className="list-group-item" key={person.id}>
          {person.name}
          <button
            className="btn btn-sm btn-info float-right"
            onClick={() => this.props.selectPerson(person)}
          >
            Select
          </button>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="col-4 text-center">
        <h3>Person List</h3>
        <div>
          <ul className="list-group">{this.renderPeople()}</ul>
        </div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => this.props.clearPerson()}
        >
          Clear
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { people: state.people };
};

export default connect(
  mapStateToProps,
  { selectPerson, clearPerson }
)(PersonList);
