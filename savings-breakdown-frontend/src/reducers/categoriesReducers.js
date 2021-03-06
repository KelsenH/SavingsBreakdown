import uuid from 'uuid';

const initialState = {
    categories: []
}

export function categories(state = initialState, action) {
  switch (action.type) {
      case 'CATEGORIES_FETCH_DATA_SUCCESS':
          return {
              ...state,
              categories: action.categories
          };

      case 'UPDATE_CATEGORY_AMOUNT':
        return {
            ...state,
            categories: state.categories.map(category => {
                if(category.id === action.id) category.currentAmount = action.newAmount;
                return category;
          })
        }

        case 'REMOVE_CATEGORY':
            return {
                ...state,
                categories: state.categories.filter((category) => 
                    category.id !== action.id
                )
            }
				
        case 'ADD_CATEGORY_SUCCESS':
            return {
                ...state,
                categories: [...state.categories, action.newCategory]
            }
        
        default:
          return state;
  }
}