import PropType from 'prop-types';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hunt from "../../../Notification/Hunt";
import routesConfig from "../../../config/routesConfig";
import Footer from "../../Footer";
import Header from "../../Header";
import Nav from "../../Nav";


const HomeLayout = ({children}) => {
    
    const [isShow,setIsSHow] = useState(false);
    // const {isOpen,onOpen} = useRegisterDemo();

    const location = useLocation();
    const currentPathName = location.pathname;
    useEffect(()=>{
        currentPathName === routesConfig.home ? setIsSHow(true) : setIsSHow(false)
    },[currentPathName])

    
    return (
        <div>
           {isShow && <Hunt/>}
     
            <Header/>
            <Nav/>
            {children}
            <Footer />
        </div>
    );
};
HomeLayout.propTypes ={
    children: PropType.node.isRequired
}
export default HomeLayout;