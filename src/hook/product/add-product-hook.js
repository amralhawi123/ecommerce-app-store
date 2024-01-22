import { useState, useEffect } from 'react' 
import { creatProduct } from '../../redux/actions/productsAction'; 
import { useSelector, useDispatch } from 'react-redux' 
import { getAllBrand } from './../../redux/actions/brandAction';
import { notify } from '../useNotification';
import { getAllCategory } from './../../redux/actions/categoryAction';
import avatar from "../../images/avatar.png";
import { getSubCategory } from '../../redux/actions/subCategoryAction';

const AdminAddProductsHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllBrand());
    }, [dispatch])
    //get last catgeory state from redux
    const category = useSelector(state => state.allCategory.category)
    //get last brand state from redux
    const brand = useSelector(state => state.allBrand.brand) 
    //get last sub cat state from redux
    const subCat = useSelector(state => state.SubCategory.subCategory)
    const onSelect = (selectedList) => {
        setSeletedSubID(selectedList)
    }
    const onRemove = (selectedList) => {
        setSeletedSubID(selectedList)
    }

    const [options, setOptions] = useState([]);
    const [img, setimg] = useState(avatar)
    const [imges, setImages] = useState([])

    //values state
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
    const [priceAftr, setPriceAftr] = useState('السعر بعد الخصم');
    const [qty, setQty] = useState('الكمية المتاحة');
    const [CatID, setCatID] = useState('');
    const [BrandID, SetBrandID] = useState(''); 
    const [seletedSubID, setSeletedSubID] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedFile, setselectedFile] = useState([])

    //to change name state
    const onChangeProdName = (event) => {
        event.persist();
        setProdName(event.target.value)
    }
    //to change name state
    const onChangeDesName = (event) => {
        event.persist();
        setProdDescription(event.target.value)
    }
    //to change name state
    const onChangePriceBefor = (event) => {
        event.persist();
        setPriceBefore(event.target.value)
    }
    //to change name state
    const onChangePriceAfter = (event) => {
        event.persist();
        setPriceAftr(event.target.value)
    }  //to change name state
    const onChangeQty = (event) => {
        event.persist();
        setQty(event.target.value)
    }
    const onChangeColor = (event) => {
        event.persist();
        setShowColor(!showColor)
    }

    //to show hide color picker
    const [showColor, setShowColor] = useState(false);
    //to store all pick color
    const [colors, setColors] = useState([]);
    //when choose new color
    const handelChangeComplete = (color) => {
        setColors([...colors, color.hex])
        setShowColor(!showColor)
    }
    const removeColor = (color) => {
        const newColor = colors.filter((e) => e !== color)
        setColors(newColor)
    }

    //when selet category store id
    const onSeletCategory = async (e) => {
        if (e.target.value !== 0) {
            await dispatch(getSubCategory(e.target.value))
        }
        setCatID(e.target.value)
    }
    
    useEffect(() => {
        if (CatID !== 0) {
            if (subCat.data) {
                setOptions(subCat.data)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CatID])

    //when selet brand store id
    const onSeletBrand = (e) => {
        SetBrandID(e.target.value)
    }

    const onImageChange =(e) => {
        if(e.target.files && e.target.files[0]){
                setimg(URL.createObjectURL(e.target.files[0]))
           setselectedFile(e.target.files)
           setImages(e.target.files)
        }
     }

    //to save data 
    const handelSubmit = async (e) => {
        e.preventDefault();
        if (CatID === 0 || prodName === "" || prodDescription === "" || priceBefore <= 0 || img.length < 1) {
            notify("من فضلك اكمل البيانات", "warn")
            return;
        } else if(priceBefore <= priceAftr){
            notify("من فضلك ادخل السعر مرة اخري", "warn")
            return;
        }

        const formData = new FormData();
        formData.append("title", prodName);
        formData.append("description", prodDescription);
        formData.append("quantity", qty);
        formData.append("price", priceBefore); 
        formData.append("priceAfterDiscount", priceAftr); 
        formData.append("imageCover",selectedFile[0])
        formData.append("category", CatID);
        formData.append("brand", BrandID);
            
        colors.map((color) => formData.append("availableColors", color))
        seletedSubID.map((item) => formData.append("subcategory", item._id))  
  
        setLoading(true)
        await dispatch(creatProduct(formData))
        setLoading(false)
    }

    //get create meesage
    const product = useSelector(state => state.allproducts.products)

    useEffect(() => {
        if (loading === false) {
           setCatID(0)
           setOptions([])
           setimg(avatar)
            setColors([]) 
            setProdName('')
            setProdDescription('')
            setPriceBefore('السعر قبل الخصم')
            setPriceAftr('السعر بعد الخصم')
            setQty('الكمية المتاحة')
            SetBrandID(0)
            setSeletedSubID([]) 
            
            setTimeout(() => setLoading(true), 1500)
            if (product) {
                if (product.status === 201) {
                    notify("تم الاضافة بنجاح", "success")
                } else {
                    notify("هناك مشكله", "error")
                }
            }
        }
    }, [loading, product])


    return [onImageChange,img,onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAftr, onSelect, onRemove, options, handelChangeComplete, removeColor, onSeletCategory, handelSubmit, onSeletBrand, colors, priceBefore, qty, prodDescription, prodName]

}

export default AdminAddProductsHook