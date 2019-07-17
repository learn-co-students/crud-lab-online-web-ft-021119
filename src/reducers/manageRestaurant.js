
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  let newState = []
  switch (action.type) {

    case "ADD_RESTAURANT":
      const newRestaurant = {text: action.text, id: cuid(), reviews: []}
      newState = {...state, restaurants: state.restaurants.concat(newRestaurant)}
      return newState

    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {...state, restaurants}

    case "ADD_REVIEW":
      const review = {text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn()}
      newState = {...state, reviews: state.reviews.concat(review)}
      return newState

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews }

    default:
      return state
  }
}
