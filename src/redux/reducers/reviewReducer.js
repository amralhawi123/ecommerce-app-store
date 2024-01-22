import { CREAT_REVIEW , CET_ALL_REVIEW, DELETE_REVIEW, EDIT_REVIEW} from "../type"
const inital = {
   createReview:[],
   getAllReview:[],
   deleteReview:[],
   editReview:[],
   loading:true,
}
const reviewReducer =(state= inital, action) => {
   switch (action.type) {
      case CREAT_REVIEW:
         return {
            ...state,
            createReview:action.payload,
            loading:false,
         }
      case CET_ALL_REVIEW:
         return {
            ...state,
            getAllReview:action.payload,
            loading:false,
         }
      case DELETE_REVIEW:
         return {
            ...state,
            deleteReview:action.payload,
         }
      case EDIT_REVIEW:
         return {
            ...state,
            editReview:action.payload,
         }
      default:
         return state;
   }
}

export default reviewReducer