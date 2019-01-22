import uuid from 'uuid';

export function categoriesFetchDataSuccess(categories) {
  return {
    type: 'CATEGORIES_FETCH_DATA_SUCCESS',
    categories
  };
}

export function categoriesFetchData() {
	return dispatch => {
		fetch('/categories')
			.then((res) => res.json())
			.then((res) => {
				dispatch(categoriesFetchDataSuccess(res))
			})
			.catch((err) => console.log(err));
	}
};

export function updateCategoryAmount(id, newAmount) {
  return {
    type: 'UPDATE_CATEGORY_AMOUNT',
    id,
    newAmount
  }
}

export function removeCategory(id) {
  return {
    type: 'REMOVE_CATEGORY',
    id
  }
}

export function addCategory(title, goal) {
	let newCategory = {
		id: uuid.v4(),
		name: title,
		currentAmount: 0,
		goal
	}
  return dispatch => {
    fetch('/categories', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCategory)})
      .then((res) => {
        console.log(res);
        dispatch(addCategorySuccess(newCategory));
    })
  }
}

export function addCategorySuccess(newCategory) {
  return {
    type: 'ADD_CATEGORY_SUCCESS',
    newCategory
  }
}