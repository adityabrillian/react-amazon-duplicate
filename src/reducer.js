export const initialState = {
    basket: [],
    user: null,
};

// Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            ); // it's make the list in basket to has uniqe id/index so this is solution for problem delete basket with same id product
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1); //Remove basket logic with array splice
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as ites not in basket!`
                );
            }

            return {
                ...state,
                basket: newBasket,
            };

        case 'SET_USER':
            return {
                ...state,
                user: action.user, //karena di App.js menuliskan -> user <-: authUser
            };

        default:
            return state;
    }
};

export default reducer;
