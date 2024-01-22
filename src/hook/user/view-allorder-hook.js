import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllOrderPayCash } from "../../redux/actions/orderCashAction"

const ViewAllorderHook = () => {
const dispatch = useDispatch()

useEffect(() => {
   dispatch(getAllOrderPayCash(4, '')) 
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


const onPress = async(page) => {
   await dispatch(getAllOrderPayCash(4,page))
}

const allOrder = useSelector(state => state.orderCashReducer.getallordercash)
 
let allOrderPayCash = []
try {      
   if(allOrder.data){
    allOrderPayCash = allOrder.data
   }else{
    allOrderPayCash= []
    }
} catch (error) {}

let pagination = []
try{
if(allOrder.paginationResult){
   pagination = allOrder.paginationResult.numberOfPages
}else{
   pagination=[]
}
}catch(e){}

let results = []
try{
if(allOrder.results){
   results = allOrder.results
}else{
   results=[]
}
}catch(e){}

return [allOrderPayCash,pagination,results,onPress]
}

export default ViewAllorderHook
