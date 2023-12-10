import { Link } from "react-router-dom";
import routesConfig from "../../config/routesConfig";

const EmptyCart = () => {
    return (
        <div>
            <div className="pt-[50px] pb-[26px] w-[600px] m-auto ">
                <div className="flex flex-col border-spacing-0.5der rounded-md bg-white border-gray-300 items-center justify-center space-y-4 py-[28px]">
                    <div className="w-[296px] h-[180px]  l flex items-center justify-center">
                    <img src="https://fptshop.com.vn/estore-images/empty-cart.png" alt="" />
                    </div>
                    <p className="text-center text-[#cb1c22] font-semibold text-[20px]">Chưa có sản phẩm nào trong giỏ hàng.</p>
                    <p className="text-[18px] text-[#020b27]"> Cùng mua sắm hàng sản phẩm tại FPTShop nhé!</p>
                    <Link to={routesConfig.home} className="bg-[#9e161a]   rounded">
                        <p className="font-medium text-white text-[17px] px-6 py-3 ">Mua hàng</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;
