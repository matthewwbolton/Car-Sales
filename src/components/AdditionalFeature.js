import React from "react";
import { connect } from "react-redux";
import { buyItem, updateTotal } from "../actions";

const AdditionalFeature = props => {
  // console.log("this is props for ADD FEATURE", props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => {
          props.buyItem(props.feature.id);
          props.updateTotal();
        }}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     feature: state.additionalFeatures
//   };
// };

export default connect(null, { buyItem, updateTotal })(AdditionalFeature);
