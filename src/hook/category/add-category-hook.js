import avatar from "../../images/avatar.png";
import { useState , useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { creatCategory } from '../../redux/actions/categoryAction';
import { notify } from '../../hook/useNotification';

const AddCategoryHook = () => {

   const dispatch = useDispatch()
   const [img, setimg] = useState(avatar)
   const [name, setName] = useState("")
   const [selectedFile, setselectedFile] = useState(null)
   const [loading, setloading] = useState(true)
   const [isPresss, setisPresss] = useState(false)

   const onChangName= (e) => {
      e.persist()
      setName(e.target.value)
   }
   const onImageChange =(e) => {
      if(e.target.files && e.target.files[0]){
         setimg(URL.createObjectURL(e.target.files[0]))
         setselectedFile(e.target.files[0])
      }
   }

   const res = useSelector(state => state.allCategory.category)

   const handleClick = async(e) => {
      e.preventDefault();

      if(name==="" || selectedFile===null){
         notify("من فضلك اكمل البيانات","warn")
         return ;
      }
      const formData= new FormData()
      formData.append("name", name)
      formData.append("image",selectedFile)
      setloading(true)
      setisPresss(true)
      await dispatch(creatCategory(formData))
      setloading(false) 

   }
   useEffect(() => {
      if(loading === false){
         setName("")
         setimg(avatar)
         setselectedFile(null)
         setloading(true)
         setTimeout(() => {
            setisPresss(false)
         }, 1000);
         if(res.status === 200){
            notify("تم الاضافة بنجاح", "success")
         }else{
            notify("هناك مشكلة في عملية الاضافة", "error")
         }
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [loading])

   return [img, name,loading, isPresss, onImageChange, handleClick, onChangName]
}

export default AddCategoryHook
