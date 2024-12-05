export const initialState = {
  basket: [],
};

export const reduser = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        baskat: [...state.basket, action.item],
      };
    default:
      return state;
  }

  // chack if the item exists
  //     const existingItem = state.baskat.find(
  //       (item) => item.id === action.item.id
  //     );
  //     if (!existingItem) {
  //       return {
  //         ...state,
  //         baskat: [...state.basket, { ...action.item, amount: 1 }],
  //       };
  //     } else {
  //       const updeteBasket = state.basket.map((item) => {
  //         return item.id === action.item.id
  //           ? { ...item, amount: item.amount + 1 }
  //           : item;
  //       });
  //       return {
  //         ...state,
  //         basket: updeteBasket,
  //       };
  //     }
  //     return {
  //       ...state,
  //       baskat: [...state.basket, action.item],
  //     };

  // default:
  //   return state;
  // }
};
