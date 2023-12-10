import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import routesConfig from "../../config/routesConfig";
import EmptyCart from "./EmptyCart";
import ItemProductCart from "./ItemProductCart";
import SuccessNotifications from '../../Notification/SuccessNotifications' 
import DrawOutlineButton from "../Button/DrawOutlineButton";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from "react";
import { xoaGH } from "../../actions/cartSilce";
import { useDispatch } from 'react-redux';
const ProductCart = () => {
  const isLoggedIn = useSelector(state => state.authentocatin.logged);
  const isUser = useSelector(state => state.authentocatin.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(false);
  const cartData = useSelector((state) => state.cart.data) || [];
  const total = cartData.reduce((sum, product) => sum + product.gia * product.soluong, 0);
  const totalDiscount = cartData.reduce((sum, product) => sum + (product.gia - product.gia_km) * product.soluong , 0);
  const totalPayment = cartData.reduce((sum, product) => sum + product.gia_km * product.soluong ,0);
  const handleCheckout = async () => {
    if (isLoggedIn) {
      const orderData = {
        name: isUser.name,
        time: cartData.time,
        email: isUser.email,
        total: totalPayment,
    };
    
        // Gọi API để lưu đơn hàng
        const response = await fetch('http://localhost:4000/laptop/luudonhang', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData), // Send cartData in the body of your request
        });

        const data = await response.json();
        console.log(data);
        
        if (data.id_dh !== -1) {
          const orderDetailData = {
            id_dh: data.id_dh,
            id_sp: cartData.id_sp,
            so_luong: cartData.so_luong,
        };
            // If the order was saved successfully, save the order details
            const response2 = await fetch('http://localhost:4000/laptop/luugiohang', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderDetailData), // Send cartData in the body of your request
            });

            const data2 = await response2.json();
            setShowNotification(true);
            if (data2.thongbao === "Đã lưu sp vào db") {
              dispatch(xoaGH()); // This clears the cart
            }
        }

      
    } else {
        // Chuyển hướng người dùng đến trang đăng nhập
        navigate('/login', { state: { from: location.pathname } });
    }
};
  function formatVND(amount) {
    // Sử dụng toLocaleString để định dạng số thành tiền tệ VND
    return amount.toLocaleString('vi-VN', {  currency: 'VND' });
     } 
  return (
    <div className="w-[806px] m-auto"> 
     {showNotification && <SuccessNotifications/>}
      <div className="pt-[30px] flex items-center">
        <IoIosArrowBack className="mr-1"/>
        <Link to={routesConfig.home} className="text-blue-500 "> Tiếp tục mua sắm</Link>
      </div>
      {cartData.length > 0 ? (
        <div className="w-full">
          <div className="text-lg font-bold pt-4">
            Có {cartData.length} sản phẩm trong giỏ hàng
          </div>
          <div className="mb-4  pt-[10px] ">
            <div className="flex flex-col  ">
              {cartData.map((cart,index) => (
                <ItemProductCart key={index} data={cart}/>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 ">
            <div className="flex justify-between w-full mb-4">
              <div className="text-lg font-bold">
                <div>Tổng Tiền</div>
                <div>Giảm giá khuyến mãi</div>
                <div>Giảm giá voucher</div>
              </div>
              <div className="text-[#020b27] text-[18px]">
                <div>{formatVND(total)}đ</div>
                <div className="text-[#657384] text-[17px]">-{formatVND(totalDiscount)}đ</div>
                <div>0đ</div>
              </div>
            </div>
            <div className="flex justify-between w-full mb-4">
              <div className="text-lg font-bold">
                Cần thanh toán ({cartData.length} sản phẩm)
              </div>
              <div className="text-[#cb1c22] text-[20px] font-semibold" >{formatVND(totalPayment)}đ</div>
            </div>
          </div>
          <div className="text-center text-[25px] font-medium"> 
            <DrawOutlineButton onClick={handleCheckout}  >Thanh toán</DrawOutlineButton>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default ProductCart;
