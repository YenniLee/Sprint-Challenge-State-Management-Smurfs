import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";

function SmurfList({ fetchSmurfs, isFetching, smurfs, error }) {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  // const handleDelete = e => {
  //   e.preventDefault();
  //   deleteSmurf(smurfs.id)
  // }

  return (
    <div>
      <h2>Smurf List</h2>
      {smurfs.map(smurf => {
        return (
          <div key={smurf.id}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            {/* <button onClick={handleDelete}>Remove</button> */}
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs}
)(SmurfList);