
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notify } from '../useNotification'
import { addAddress } from '../../redux/actions/addressAction'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddAddressHook = () => {
    const dispatch = useDispatch() 
    const navigate = useNavigate() 

    const [addressName, setAddressName] = useState("")
    const [addressDesc, setAddressDesc] = useState('')
    const [addressPhone, setAddressPhone] = useState('') 
    const [addressCity, setAddressCity] = useState('') 
    const [addressCode, setAddressCode] = useState('') 
    const [Loading, setLoading] = useState(true) 
 
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

    const onSubmit= async(e) => {
        if(addressName === '' || addressDesc==='' || addressPhone==='' || addressCity==='' || addressCode===''){
            notify("تأكد من ادخال البيانات بشكل صحيح", "warn")
            return
        }
        setLoading(true)
        await dispatch(addAddress({
            alias: addressName,
            details: addressDesc,
            phone: addressPhone,
            city: addressCity,
            postalCode: addressCode
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.addressReducer.addaddress)

    useEffect(() => {
        if(Loading === false){
           if(res && res.status === 200){
              notify("تم اضافة العنوان بنجاح", "success")
              setTimeout(() => {
                navigate('/user/address')
              }, 2000);
           }else {
              notify("حدث خطأ أثناء إضافة العنوان", "error")
           }
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [Loading])

    return[onChangName,onChangDesc,onChangPhone, onChangCity,onChangCode,addressName,addressDesc, addressPhone,
        addressCity, addressCode, Loading, onSubmit ]
}

export default AddAddressHook