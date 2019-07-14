import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
   let newState = {}
   let updatedRestaurants
   switch(action.type) {
      case "ADD_RESTAURANT":
         const newRestaurant = {text: action.text, id: cuid(), reviews: []}
         newState = {restaurants: state.restaurants.concat(newRestaurant)}
         return newState
      
      case "DELETE_RESTAURANT":
         updatedRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
         return {restaurants: updatedRestaurants}

      case "ADD_REVIEW":
         // console.log(action)
         updatedRestaurants = state.restaurants.map(restaurant => {
            if (restaurant.id === action.review.restaurantId) {
               restaurant.reviews.push(action.review)
            }
            return restaurant
         })
         return {restaurants: updatedRestaurants}

      default:
         return state
   }
}
