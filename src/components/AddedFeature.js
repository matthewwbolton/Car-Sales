import React from "react";
import { connect } from "react-redux";
import { removeFeature, updateTotal } from "../actions";

const AddedFeature = props => {
  // console.log("$$$$$$$$$", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => {
          props.removeFeature(props.feature.id);
          props.updateTotal();
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

export default connect(null, { removeFeature, updateTotal })(AddedFeature);
