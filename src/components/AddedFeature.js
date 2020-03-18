import React from "react";
import { connect } from "react-redux";
import { removeFeature, decrementPrice } from "../actions";

const AddedFeature = props => {
  // console.log("$$$$$$$$$", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => {
          props.removeFeature(props.feature.id);
          props.decrementPrice(props.feature.price);
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     feature: state.additionalFeatures
//   };
// };

export default connect(null, { removeFeature, decrementPrice })(AddedFeature);
