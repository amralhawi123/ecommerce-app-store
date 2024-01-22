import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";
import { addToWWishList, removeWishList } from './../../redux/actions/wishListAction';
import { notify } from "../useNotification";

const AddToWishListHook = (item, favProd) => {

    const dispatch = useDispatch();
    const [favImg, setFavImg] = useState(favoff);
    const [loadingAdd, setLoadingAdd] = useState(true)
    const [loadingRemo, setLoadingRemo] = useState(true)
    
    const Fav = favProd.some(id=> id === item._id)
    const [isFav, setIsFav] = useState(Fav)

    useEffect(() => {
        setIsFav(favProd.some(id=> id === item._id))
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [favProd]);

    const handleFav = () => {
        if(isFav){
            RemoveProductToWWishList();
        } else {
            AddProductToWWishList();
        } 
    };
  
    useEffect(() => {
      if (isFav === true) {
        setFavImg(favon);
      } else {
        setFavImg(favoff);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFav]);
  
    const resAdd = useSelector((state) => state.addProductToWishList.addwishList);
    const resRemove = useSelector((state) => state.addProductToWishList.removeWishList);
  
    const AddProductToWWishList = async () => {
        setFavImg(favon);
        setLoadingAdd(true)
      await dispatch(
        addToWWishList({
          productId: item._id,
        })
      );      
      setLoadingAdd(false)
}

const RemoveProductToWWishList = async () => {
    setFavImg(favoff);
    setLoadingRemo(true)
    await dispatch(removeWishList(item._id));
    setLoadingRemo(false)
}

useEffect(()=> {
    if(loadingAdd === false){
        if (resAdd && resAdd.status === 200) {
            notify("تمت اضافة المنتج للمفضلة بنجاح", "success")
        }
        else if (resAdd && resAdd.status === 401){
            notify("انت غير مسجل دخول", "error")
        }
    }
},[loadingAdd])

useEffect(()=> {
    if(loadingRemo === false){ 
        if (resRemove && resRemove.status === 200) {
            notify("تمت حذف المنتج من المفضلة بنجاح", "warn")
        }        else if (resAdd && resAdd.status === 401){
            notify("انت غير مسجل دخول", "error")
        }
    }
},[loadingRemo])

    return [favImg, handleFav]
}

export default AddToWishListHook