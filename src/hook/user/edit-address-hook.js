import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { notify } from './../useNotification';
import { useNavigate } from 'react-router-dom';
import { getOneAddress, updateAddress } from '../../redux/actions/addressAction';

const EditAddressHook = (id) => {
    const dispatch = useDispatch() 
    const navigate = useNavigate() 

    const [addressName, setAddressName] = useState("")
    const [addressDesc, setAddressDesc] = useState('')
    const [addressPhone, setAddressPhone] = useState('') 
    const [addressCity, setAddressCity] = useState('') 
    const [addressCode, setAddressCode] = useState('') 
    const [Loading, setLoading] = useState(true) 
    const [LoadingData, setLoadingData] = useState(true) 
 
    const onChangName= (e) => {
        e.persist()
        setAddressName(e.target.value)
    }
    const onChangDesc= (e) => {
        e.persist()
        setAddressDesc(e.target.value)
    }
    const onChangPhone= (e) => {
        e.persist()
        setAddressPhone(e.target.value)
    }
    const onChangCity= (e) => {
        e.persist()
        setAddressCity(e.target.value)
    }
    const onChangCode= (e) => {
        e.persist()
        setAddressCode(e.target.value)
    } 
    

    useEffect(() => {
        setLoadingData(true)
        dispatch(getOneAddress(id))
        setLoadingData(false)
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

     const oneaddress = useSelector(state => state.addressReducer.oneaddress)

     useEffect(() => {
        if(LoadingData === false){
        if(oneaddress.data){
            setAddressName(oneaddress.data.alias)
            setAddressDesc(oneaddress.data.details)
            setAddressPhone(oneaddress.data.phone)
            setAddressCity(oneaddress.data.city)
            setAddressCode(oneaddress.data.postalCode)
            
        }
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [LoadingData])

    const onSubmit= async(e) => {
        setLoading(true)
        await dispatch(updateAddress(id,{
            alias: addressName,
            details: addressDesc,
            phone: addressPhone,
            city: addressCity,
            postalCode: addressCode
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.addressReducer.updateaddress)

    useEffect(() => {
        if(Loading === false){
           if(res && res.status === 200){
              notify("تم تعديل العنوان بنجاح", "success")
              setTimeout(() => {
                  navigate('/user/address')
              }, 2000);
           }else {
              notify("حدث خطأ أثناء التعديل", "error")
           }
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [Loading])
 return [addressName, addressDesc, addressPhone,addressCity,addressCode, onChangName, onChangDesc, onChangPhone,onChangCity,onChangCode , onSubmit]
}


export default EditAddressHook