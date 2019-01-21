const initialState = {
    categories: []
}

export function categories(state = initialState, action) {
  switch (action.type) {
      case 'CATEGORIES_FETCH_DATA_SUCCESS':
          console.log(action.categories)
          return {
              ...state,
              categories: action.categories
          };

      case 'UPDATE_CATEGORY_AMOUNT':
        return {
            ...state,
            // categories: state.categories.map(category => {
            //     if(category.id === action.id) category.currentAmount = action.newAmount;
            //     return category;
          }
        
        
      default:
          return state;
  }
}