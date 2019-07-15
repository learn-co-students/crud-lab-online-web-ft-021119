import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      console.log(state)
      let restaurant = {id: cuid(), text: action.formData}

      console.log([...state.restaurants, restaurant])
      return {restaurants: [...state.restaurants, restaurant], reviews: [...state.reviews]};

    case 'DELETE_RESTAURANT':
      return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload), reviews: [...state.reviews]};

    case 'ADD_REVIEW':

      let review = {id: cuid(), restaurantId: action.review.restaurantId, text: action.review.text};

      console.log({restaurants: [...state.restaurants], reviews: [...state.reviews, review]})
      return {restaurants: [...state.restaurants], reviews: [...state.reviews, review]};

    case 'DELETE_REVIEW':
      return{restaurants: [...state.restaurants], reviews: state.reviews.filter(review => review.id !== action.payload.id)}
    default:
      return state
  }
}
