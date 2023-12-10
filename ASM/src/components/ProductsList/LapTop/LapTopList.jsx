import { Link } from "react-router-dom";
import routesConfig from "../../../config/routesConfig";
import { useState } from "react";
import { themSP } from "../../../actions/cartSilce";
import {useDispatch} from 'react-redux'
import SlideInNotifications from "../../../Notification/SlideInNotifications";
const LapTopList = ({product}) => {
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(false);
    const [isNotificationVisible, setNotificationVisible] = useState(false);
    const HandleHSlide = () => {
        // Thêm sản phẩm vào giỏ hàng
        dispatch(themSP(product));
        console.log(dispatch(themSP(product)));
        setNotificationVisible(true);
    };
    function formatVND(amount) {
        // Sử dụng toLocaleString để định dạng số thành tiền tệ VND
        return amount.toLocaleString('vi-VN', {  currency: 'VND' });
      }
    return (
        <div className="" onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className="w-full  rounded-sm p-3 hover:shadow-[0_0_2px_4px_rgba(200,200,200,0.5)] duration-200 hover:cursor-pointer">
            <div className="fame-product border rounded-lg relative overflow-hidden transform transition-transform duration-300 hover:scale-105 " >
                <div className="relative">
                    <img className="w-[200px] h-[150px] mt-[30px]  ml-[30px]" src={product?.hinh} alt="" />
                </div>
                <div className='absolute text-white mt-[-10px] ml-[2px] border rounded-sm py-[4px] pr-[14px] border-red-500 bg-red-500 font-medium text-sm'>
                    <div className="pl-2">
                        {formatVND(product?.gia - product?.gia_km)} đ
                    </div>
                </div>
            </div>
            <div className='font-bold text-[17px] opcity-70 hover:text-blue-500 pt-[13px]'>
                {product?.ten_sp}
            </div>
            <div className=' flex items-center justify-between pt-[12px] pb-[12px]'>
                <div className='border border-red-500 font-semibold text-[18px] text-white bg-[#cb1c22] rounded-xl px-3'>
                    <p>{formatVND(product?.gia_km)} đ</p>
                </div>
                <div className='line-through text-sm text-color-price'>
                    <p >{formatVND(product?.gia)} đ</p>
                </div>
            </div>
            <div className='border border-none rounded-sm py-4 bg-[#f8f9fa]'>
                <div className='flex pl-3 '>
                    <img className='rounded-3xl' src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/t%E1%BA%A3i%20xu%E1%BB%91ng-1695965883711.png" alt="" />
                    <img className='rounded-3xl pl-3' src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/Zalopay-1693187470025.png" alt="" />
                </div>
                <div className='text-sm pl-3 pt-3 text-[#555555]'>
                    {product?.ngay}
                </div>
            </div>
                 {isHovered && (
                    <div className="flex  justify-evenly gap-1 pt-[10px]">
                        <div className="flex justify-between">
                            <Link to={`${routesConfig.productDetail}?id=${product?.id_sp}`}   className="px-4 py-2 bg-red-500 text-white rounded pl-[10px]">Mua ngay</Link>
                            <SlideInNotifications onClick={HandleHSlide} product={product} onClose={() => isNotificationVisible}/>
                        </div>
                    </div>
                )}
            </div>
         </div>
    );
};
{/* <SlideInNotifications onClick={()=>dispatch(themSP(product))}/> */}

export default LapTopList;
