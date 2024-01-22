import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { useEffect, useState } from 'react'
import { notify } from './../../hook/useNotification';
import { creatSubCategory } from '../../redux/actions/subCategoryAction';

const AddSuCategoryHook = () => {
   const dispatch = useDispatch()
   useEffect(() => {
         
      if(!navigator.onLine){
         notify("هناك مشكلة في الاتصال بالانترنت", "warn")
         return
      }
      dispatch(getAllCategory())
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
 
   const [id, setId] = useState('0')
   const [name, setName] = useState('')
   const [loading, setLoading] = useState(true)
   
   const category = useSelector(state => state.allCategory.category)
   const subcategory = useSelector(state => state.SubCategory.subCategory)
 
   // on change dropdown menu
   const handelClick =(e) => {
       setId(e.target.value)
   }
 
   // on change name
   const onChangName =(e) => {
      e.persist()
       setName(e.target.value)
   }
 
   // on save data
   const handelSubmit = async(e) => {
      e.preventDefault()

      if(id === "0"){
         notify("من فضلك اختر تصنيف رئيسي", "warn")
         return;
      }
   
      if(name === ""){
         notify("من فضلك ادخل اسم التصنيف الفرعي", "warn")
         return;
      }
   
      setLoading(true)
      await dispatch(creatSubCategory({
            name,
            category:id
      }))
      setLoading(false)
      }
 
   useEffect(() => {
   
      if(loading === false){
         setName("")
         setId("0")
            if(subcategory.status === 201){
            notify("تم الاضافة بنجاح", "success")
         }
         else if (subcategory === "Error Error: Request failed with status code 400"){
            notify("هذا الاسم موجود بالفعل", "error")
         }
         else{
            notify("هناك مشكلة في عملية الاضافة", "error")
         }
         setLoading(true)
      }
      }, [loading, subcategory])

      return [category, name,handelClick, handelSubmit, onChangName]
 
}
export default AddSuCategoryHook
