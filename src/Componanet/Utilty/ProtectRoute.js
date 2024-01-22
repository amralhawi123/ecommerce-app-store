import { Navigate, Outlet } from "react-router-dom"

const ProtectRoute = ({auth, children}) => {

    if(auth === false){
        return <Navigate to='/login' replace/>
    }

    return children ? children : <Outlet/>
}

export default ProtectRoute