import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOneOrder } from "../../redux/actions/orderCashAction"

const GetOneOrderHook = (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getOneOrder(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const oneOrder = useSelector(state => state.orderCashReducer.getpneorder) 


 let spcificOrder = [];
 try {      
    if(oneOrder.data){
        spcificOrder = oneOrder.data
    } else{
        spcificOrder = []
    }
 } catch (error) {}

 return [spcificOrder]
}

export default GetOneOrderHook