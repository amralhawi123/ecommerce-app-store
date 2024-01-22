import avatar from "../../images/avatar.png";
import { useState , useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getOneCategory, updateCategory } from '../../redux/actions/categoryAction';
import { notify } from '../../hook/useNotification';

const AdminEditCategoryHook = (id) => {

   const dispatch = useDispatch()

   useEffect(() => { 
        const run = async () => {
            await dispatch(getOneCategory(id))
         }
         run()
   }, [])

   const item = useSelector(state => state.allCategory.oneCategory)
   
   const [img, setimg] = useState(avatar)
   const [name, setName] = useState("")
   const [selectedFile, setselectedFile] = useState(null)
   const [loading, setloading] = useState(true)
   const [isPresss, setisPresss] = useState(false)

   useEffect(() => {
    if (item.data) {
              setimg(item.data.image)
              setName(item.data.name
                )
       }
 }, [item])

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

   const res = useSelector(state => state.allCategory.updatecategory)

    //convert url to file
    const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
};

   const handleClick = async(e) => {
      e.preventDefault();

      if(name==="" || img===avatar){
         notify("من فضلك اكمل البيانات","warn")
         return ;
      }
      const formData= new FormData()
      formData.append("name", name) 
      if(typeof img === "string"){
        convertURLtoFile(img).then(val => formData.append("image",val))
     }else{
        formData.append("image",img)
     }
      setloading(true)
      setisPresss(true)
      await dispatch(updateCategory(id,formData))
      setloading(false) 

   }
   useEffect(() => {
      if(loading === false){
         setloading(true)
         setTimeout(() => {
            setisPresss(false)
         }, 1000);
         if(res.status === 200){
            notify("تم التعديل بنجاح", "success")
         }else{
            notify("هناك مشكلة في عملية الاضافة", "error")
         }
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [loading])

   return [img, name,loading, isPresss, onImageChange, handleClick, onChangName]
}

export default AdminEditCategoryHook