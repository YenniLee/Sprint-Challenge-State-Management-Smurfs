import React, { useEffect } from "react";
import Smurf from './Smurf';
import { connect } from "react-redux";
import { fetchSmurfs, deleteSmurf } from "../actions";

function SmurfList({ fetchSmurfs, isFetching, smurfs, error }) {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  const handleDelete = e => {
    e.preventDefault();
    deleteSmurf(smurfs.id)
  }

  return (
    <div className='smurfBox'>
      {smurfs.map(smurf => {
        return (
          <Smurf key={smurf.id} smurf={smurf} />
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
  { fetchSmurfs, deleteSmurf}
)(SmurfList);