export const initialState = {
    basket: [],
    user: null,
  };
  
  const reducer = (state, action) =>{

    //   console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
        return {
            ...state,
            basket: [...state.basket, action.item],
        }; //...state.basket--copies the initial state and action.item--add the item in which action is taken in the basket...i.e clicked item
    
    case 'EMPTY_BASKET':
        return {
            ...state,
            basket:[],
        };
        
    case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
        ); // kebasketItem lay index wesdo action ketewesedebet item index gar the same kehone--amtalgn

        let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1); //cut out the item with the indicated index else--say "can't remove"
            } else {
                console.warn(
                `Cant remove product (id: ${action.id}) as its not in basket!`
                );
            }

        return {
            ...state,
            basket: newBasket, //replace with the newBasket
        };
    case "SET_USER":
        return {
            ...state,
            user: action.user,
        };
        
    default:
        return state;
    }
  }

  export default reducer;