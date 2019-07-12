
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            let restaurant = {text: action.text, id: cuid()}
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case 'DELETE_RESTAURANT':
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id != action.id)}
        case 'ADD_REVIEW':
            let review = {text: action.review.text, id:cuid(), restaurantId: action.review.restaurantId}
            return {...state, reviews: [...state.reviews, review]}
        case 'DELETE_REVIEW':
            return {...state, reviews: state.reviews.filter(review => review.id != action.id)}
        default:
            return state
        // case 'ADD_BAND':
        //   let id = Math.random() * 10000000000000
        //   let band = {name: action.name, id: id}
        //   return { ...state, bands: [...state.bands, band] }
        // case 'DELETE_BAND':
        //   return {bands: state.bands.filter(band => band.id != action.id)}
        // default:
        //   return state;
    }
}
