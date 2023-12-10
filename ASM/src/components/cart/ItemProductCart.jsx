// import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { suaSL } from '../../actions/cartSilce';


import { FaPlus,FaMinus } from "react-icons/fa";
import DeleteNotifications from '../../Notification/DeleteNotifications';
const ItemProductCart = ({data ,index}) => {
     const increment = () => {
    dispatch(suaSL([data.id_sp, data.soluong + 1]));
};

const decrement = () => {
    if (data.soluong > 1) {
        dispatch(suaSL([data.id_sp, data.soluong - 1]));
    }
};
const dispatch = useDispatch();
const cartData = useSelector((state) => state.cart) || [];
   console.log(cartData);

    function formatVND(amount) {
    // Sử dụng toLocaleString để định dạng số thành tiền tệ VND
    return amount.toLocaleString('vi-VN', {  currency: 'VND' });
     } 
    return (
        <div className="p-2 " key={index}>
            <div className="flex border border-gray-50 rounded bg-white p-[16px]">
                <div className="w-1/3">
                    <img src={data.hinh} alt="" className="object-cover w-full h-32" />
                </div>
                <div className="w-2/3 pl-4">
                    <div className="text-lg text-[#020b27] font-bold mb-2">
                        {data.ten_sp}
                    </div>
                    <div className="flex ">
                        <div className="mb-2 pr-[30px]">
                            <div className="text-[#4a4f63] text-[16px]">Màu Sắc</div>
                            <div>
                                <p className="font-semibold">Cam</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div className="text-[#4a4f63 text-[16px]">Số lượng</div>
                            <div className="flex items-center justify-between w-24 border rounded-lg border-gray-300  ">
                            <button
                                onClick={decrement}
                                className="px-2 py-1 text-blue-500 border-2 p-2 border-gray-100  rounded-l-lg bg-white focus:outline-none">
                               <FaMinus />
                            </button>
                            <div className=" text-gray-700">{data.soluong}</div>
                            <button
                                onClick={increment}
                                className="px-2 py-1 text-blue-500 p-2  border-gray-100  border-2  rounded-r-lg bg-white focus:outline-none">
                                <FaPlus />
                            </button>
                            </div>
                         </div>
                    </div>
                </div>
                <div className="ml-[50px]">
                    <div className="ml-[90px] pb-[10px]">
                        <DeleteNotifications data={data}/>
                    </div>
                    <div className=''>
                        <div className="text-[#cb1c22] text-[20px] font-bold mb-2">
                            {formatVND(data.gia_km * data.soluong)}    đ
                        </div>
                        <div className="line-through ml-[25px] text-[16px] text-[#4a4f63]">
                            {formatVND(data.gia * data.soluong)} đ
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ItemProductCart;
