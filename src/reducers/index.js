const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [
    /* {
      title: "Cowboy Steak",
      price: 25,
      url:
        "https://i.cbc.ca/1.4491288.1516208229!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cowboysteak.jpg",
      category: "meat",
      id: 5,
    }, */
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false,
      };
    case "MENU_REQUESTED":
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: false,
      };
    case "MENU_ERROR":
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: true,
      };
    case "ITEM_ADD_TO_CART":
      let itemNew;
      state.menu.map((item) => {
        if (item.id === action.payload) {
          console.log(item);
          itemNew = item;
        }
      });

      return {
        ...state,
        items: [...state.items, itemNew],
      };

    case "ITEM_REMOVE_FROM_CART":
      const idx = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === idx);

      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1),
        ],
      };

    default:
      return state;
  }
};

export default reducer;
