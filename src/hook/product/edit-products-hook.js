import avatar from "../../images/avatar.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from './../../redux/actions/brandAction'; 
import { notify } from './../../hook/useNotification';
import { getOneProduct, updateProduct } from './../../redux/actions/productsAction'; 
import { getSubCategory } from "../../redux/actions/subCategoryAction";

const AdminEditProductHook = (id) => {
   const dispatch = useDispatch()
   useEffect(() => {
      const run = async () => {
         await dispatch(getAllCategory())
         await dispatch(getAllBrand())
         await dispatch(getOneProduct(id))
         
      }
      run()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const item = useSelector(state => state.allproducts.oneProduct)
    const category = useSelector(state => state.allCategory.category)
   const brand = useSelector(state => state.allBrand.brand)
   const subCat = useSelector(state => state.SubCategory.subCategory) 
   const onSelect = (selectedList, selectedItem) => {
      setSelectedSubId(selectedList)
   };
   
   const onRemove = (selectedList, removedItem) => {
      setSelectedSubId(selectedList)
   };
   
   const [options, setOptions] = useState([]);
   
      // values image products
      const [img, setimg] = useState(avatar)
 
      const maxNumber = 69;
      // values state
      const [proName, setProName] = useState('');
      const [proDescription, setProDescription] = useState('');
      const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
      const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
      const [qty, setQty] = useState("الكمية المتاحه");
      const [catId, setCatId] = useState('0');
      const [brandId, setBrandId] = useState('0');
      const [selectedSubId, setSelectedSubId] = useState([]);
      const [loading, setLoading] = useState(true)
      const [selectedFile, setselectedFile] = useState([])

      useEffect(() => {
         if (item.data) {
                   setimg(item.data.imageCover)
                   setProName(item.data.title)
                setProDescription(item.data.description)
                setPriceBefore(item.data.price)
                setPriceAfter(item.data.priceAfterDiscount)
                setQty(item.data.quantity)
                setCatId(item.data.category) 
                setBrandId(item.data.brand)
                setColors(item.data.availableColors)
            }
      }, [item])
         // to show hide color
   const [showColor, setShowColor] = useState(false);
   // to store colors
   const [colors, setColors] = useState([]);
   
               // when choos new color
               const handelChangeComplete = (color) => {
                  setColors([...colors, color.hex])
                  setShowColor(!showColor)
               }
   
   
         // when remove color
         const removecolor = (color) => {
            const newColors = colors.filter((e) => e !== color)
            setColors(newColors)
         }
      // when select category store id
   //when selet category store id
   const onSelectedCategory = async (e) => {
      setCatId(e.target.value)
  }
  useEffect(() => {
      if (catId != 0) {
          const run = async () => {
              await dispatch(getSubCategory(catId))
          }
          run();
      }
  }, [catId])

  useEffect(() => {
      if (subCat) {
          setOptions(subCat.data)
      }
  }, [subCat]) 
  
         // when select brand store id
      const onSelectedBrand = (e) => {
         setBrandId(e.target.value)
      }

      const onChangeName=(e) => {
         e.persist()
         setProName(e.target.value)
      }
      
      const onChangeDescription=(e) => {
         e.persist()
         setProDescription(e.target.value)
      }
      
      const onChangePriceBefor=(e) => {
         e.persist()
         setPriceBefore(e.target.value)
      }
      
      const onChangePriceAfter=(e) => {
         e.persist()
         setPriceAfter(e.target.value)
      }
      
      const onChangeQualety=(e) => {
         e.persist()
         setQty(e.target.value)
      }
      
      const onChangeColor=(e) => {
         e.persist()
         setShowColor(!showColor)
      }
      const onImageChange =(e) => {
         if(e.target.files && e.target.files[0]){
                 setimg(URL.createObjectURL(e.target.files[0]))
            setselectedFile(e.target.files) 
         }
      }

          //convert url to file
    const convertURLtoFile = async (url) => {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.blob();
      const ext = url.split(".").pop();
      const filename = url.split("/").pop();
      const metadata = { type: `image/${ext}` };
      return new File([data], Math.random(), metadata);
  };

   // to save data 
   const handelSubmit = async (e) => {
      e.preventDefault()
 
      
   if(catId === 0 || proName === "" || proDescription === "" || priceBefore <= 0  ){
      notify("من فضلك اكمل البيانات", "warn")
      return;
   }

    
         const formData = new FormData()
         formData.append("title",proName )
         formData.append("description",proDescription )
         formData.append("quantity",qty )
         formData.append("price",priceBefore )
            if(typeof img === "string"){
               convertURLtoFile(img).then(val => formData.append("imageCover",val))
            }else{
               formData.append("imageCover",img)
            }
         formData.append("category",catId )
         formData.append("brand",brandId ) 

         colors.map((color) => formData.append("availableColors",color ))
         selectedSubId.map((item) => formData.append("subcategory",item._id ))

         setLoading(true)
         await dispatch(updateProduct(id,formData))
         setLoading(false)
      }
      
      const product = useSelector(state => state.allproducts.updateProduct)

      useEffect(() => {
         if(loading === false){
            setTimeout(() => {
               setLoading(true)
            }, 1000);
            if(product){
               if(product.status === 200){
                  notify("تم التعديل بنجاح", "success")
               }else if(product.status === 400){
                  notify("Bade Requsit", "success")
               }else{
                  notify("هناك مشكلة في عملية الاضافة", "error")
               }
            }
         }
         // eslint-disable-next-line react-hooks/exhaustive-deps
         }, [loading])

         return [img, proName,maxNumber,onImageChange, proDescription, priceAfter, priceBefore, colors,
            qty, options, onSelect, onChangeColor, onChangeDescription, onChangeName, onChangePriceAfter, onChangePriceBefor,
         onChangeQualety, onSelectedBrand, onSelectedCategory, category, brand, handelSubmit,
         removecolor, handelChangeComplete,onRemove, showColor, catId, brandId
      ]

   }

export default AdminEditProductHook
