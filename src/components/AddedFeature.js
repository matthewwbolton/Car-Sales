import React from "react";
import { useDispatch } from "react-redux";
import { removeFeature, updateTotal } from "../actions";

const AddedFeature = props => {
  console.log(props);
  const dispatch = useDispatch();

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => {
          dispatch(removeFeature(props.feature));
          dispatch(updateTotal());
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
