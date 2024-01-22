import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllReview } from '../../redux/actions/reviewAction'

const ViewRateHook = (id) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        dispatch(getAllReview(id, 1, 5))
        setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
 
    
    const allReivews = useSelector(state => state.reviewReducer.getAllReview)
 const getPage = async (page) => {
    await dispatch(getAllReview(id, page, 5))
 }
    let items = []
    try {      
       if(allReivews.data){
          items = allReivews.data
       }else{
          items= []
       }
    } catch (error) {
      
    }
 
    let pagination = []
    try{
    if(allReivews.paginationResult){
       pagination = allReivews.paginationResult.numberOfPages
    }else{
        pagination=[]
    }
    }catch(e){}

    return [items, getPage, pagination,loading]
}

export default ViewRateHook