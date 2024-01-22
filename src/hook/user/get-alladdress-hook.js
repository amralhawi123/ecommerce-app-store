
import { useDispatch, useSelector } from 'react-redux' 
import { useEffect } from 'react'
import { getAllAddress } from '../../redux/actions/addressAction'

const GetAllAddressHook = (id) => {
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getAllAddress()) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const allAddress = useSelector(state => state.addressReducer.alladdress)
     
    let address = []
    try {      
       if(allAddress.data){
         address = allAddress.data
       }else{
         address= []
        }
    } catch (error) {
       
    }

    return [address]
}
export default GetAllAddressHook