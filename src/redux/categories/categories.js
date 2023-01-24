const CHECK_STATUS = 'CHECK_STATUS';

const construction = 'Unser construction';

const initialState = {
  categories: [],
};

export function checkStatus() {
  return { type: CHECK_STATUS };
}

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return construction;
    default:
      return state;
  }
}
