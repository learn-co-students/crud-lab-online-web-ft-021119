
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [],
 reviews: []}, action) {

    switch(action.type){
    	

      case 'ADD_RESTAURANT':
        // console.log("action.text=",action.text)

        const restaurant = {
          		id: cuidFn(),
          		text: action.text

          	}

        return {...state, restaurants: state.restaurants.concat(restaurant)}


   
        case 'DELETE_RESTAURANT':
            

            return{restaurants: state.restaurants.filter(res => res.id !== action.id)}

        case 'ADD_REVIEW':

        // console.log("action.text=",action.text)
         const review = {
              id: cuidFn(),
              text: action.text
            }


        return {...state, reviews: state.reviews.concat(review)}

        case 'DELETE_REVIEW':

        
            const reviews = state.reviews.filter(review => review.id !== action.id)
      return {...state, reviews}



default:
return state;







    }


}
