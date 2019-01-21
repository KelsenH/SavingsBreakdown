export function categoriesFetchData(categories) {
    return {
        type: 'CATEGORIES_FETCH_DATA_SUCCESS',
        categories
    };
}


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
    return {
        type: 'ADD_CATEGORY',
        title,
        goal
    }
}