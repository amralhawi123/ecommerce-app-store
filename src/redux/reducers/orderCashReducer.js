import { CHANGE_ORDER_DELIVER, CHANGE_ORDER_PAY, CREATE_ORDER_CARD, CREATE_ORDER_CASH, GET_ALL_ORDER_CASH, GET_ONE_ORDER } from "../type";

const inital = {
    createordercash:[],
    createordercard:[],
    getallordercash:[],
    getpneorder:[],
    changeorderPay:[], 
    changeorderdeliver:[], 
}

const orderCashReducer =(state= inital, action) => {

   switch (action.type) {
      case CREATE_ORDER_CASH:
         return {
            ...state,
            createordercash:action.payload, 
         }
      case GET_ALL_ORDER_CASH:
         return {
            ...state,
            getallordercash:action.payload, 
         }
      case GET_ONE_ORDER:
         return {
            ...state,
            getpneorder:action.payload, 
         }
      case CHANGE_ORDER_PAY:
         return {
            ...state,
            changeorderPay:action.payload, 
         }
      case CHANGE_ORDER_DELIVER:
         return {
            ...state,
            changeorderdeliver:action.payload, 
         }
      case CREATE_ORDER_CARD:
         return {
            ...state,
            createordercard:action.payload, 
         }
         default:
            return state
   }
}

export default orderCashReducer