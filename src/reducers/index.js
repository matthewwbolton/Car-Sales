import { BUY_ITEM, REMOVE_FEATURE, UPDATE_TOTAL } from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ITEM:
      //   console.log("this is the payload for buyItem", action.payload);
      let addedFeature = state.additionalFeatures.find(
        elem => elem.id === action.payload
      );
      //   console.log("&&&&&&&&&&&&&&&&&", addedFeature);
      return {
        ...state,
        car: {
          ...state.car,
          features: Array.from(new Set([...state.car.features, addedFeature]))
        }
      };

    case REMOVE_FEATURE:
      //   let remainingFeatures = state.car.features.filter(
      //     elem => elem.id !== action.payload
      //   );
      //   console.log("***********", remainingFeatures);
      //   console.log("^^^^^^^^^^^^", action.payload);
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(
            elem => elem.id !== action.payload
          )
        }
      };

    case UPDATE_TOTAL:
      return {
        ...state,
        additionalPrice: state.car.features.reduce(
          (acc, curr) => acc + curr.price,
          0
        )
      };

    default:
      return state;
  }
};
