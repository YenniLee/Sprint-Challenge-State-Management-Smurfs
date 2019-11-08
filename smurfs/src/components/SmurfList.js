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
    <div className='smurfBox'>
      {smurfs.map(smurf => {
        return (
          <div className='names' key={smurf.id}>
            <h3>Name: {smurf.name}</h3>
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