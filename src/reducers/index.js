const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [
    {
      title: "Cesar salad",
      price: 12,
      url:
        "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
      category: "salads",
      id: 1,
      qtty: 0,
    },
    {
      title: "Pizza Margherita",
      price: 10,
      url:
        "https://dierezepte.com/wp-content/uploads/2019/08/pizza-margherita.jpg",
      category: "pizza",
      id: 2,
      qtty: 0,
    },
    {
      title: "Pizza Napoletana",
      price: 13,
      url:
        "https://www.pizzanapoletana.org/struttura/pagine_bicolor/mobile/decalogo_avpn_1.jpg",
      category: "pizza",
      id: 3,
      qtty: 0,
    },
    {
      title: "Greece salad",
      price: 8,
      url:
        "https://assets.epicurious.com/photos/576454fb42e4a5ed66d1df6b/master/pass/greek-salad.jpg",
      category: "salads",
      id: 4,
      qtty: 0,
    },
    {
      title: "Cowboy Steak",
      price: 25,
      url:
        "https://i.cbc.ca/1.4491288.1516208229!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cowboysteak.jpg",
      category: "meat",
      id: 5,
      qtty: 0,
    },
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
      let itemNew = state.menu.find((item) => item.id === action.payload);

      console.log(itemNew);
      const newState = { ...state };
      newState.items.map((item, index) => {
        if (item.id === itemNew.id) {
          newState.items[index].qtty += 1;
        }
      });

      console.log(newState);

      return newState;

    case "ITEM_REMOVE_FROM_CART":
      const idx = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === idx);

      const delState = { ...state };
      /* delState.items.map((item, index) => {
        if (item.id === itemIndex) {
          delState.items[index].qtty -= 1;
          console.log(item);
        }
      }); */
      delState.items[itemIndex].qtty -= 1;
      console.log(delState);

      return delState;

    default:
      return state;
  }
};

export default reducer;
