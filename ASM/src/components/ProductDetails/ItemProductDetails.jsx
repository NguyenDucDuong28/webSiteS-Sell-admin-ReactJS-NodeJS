
import { CiYoutube } from "react-icons/ci";
import { IoMdImages } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import { Tb360View } from "react-icons/tb";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { GiTargetPrize ,GiWeight } from "react-icons/gi";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { BsCpuFill } from "react-icons/bs";
import { IoColorPaletteSharp } from "react-icons/io5";
import { BiSolidMemoryCard } from "react-icons/bi";
import { Link } from "react-router-dom";
import routesConfig from "../../config/routesConfig";
import {useDispatch} from 'react-redux'
import { themSP } from "../../actions/cartSilce";
function ItemProductDetails({items ,index}) {
    const dispatch = useDispatch();
    console.log(Array.isArray(items));
    function formatVND(amount) {
        // Sử dụng toLocaleString để định dạng số thành tiền tệ VND
        return amount.toLocaleString('vi-VN', {  currency: 'VND' });
    }
    const handleBuyNow = () => {
        dispatch(themSP(items));
        console.log(dispatch(themSP(items)));
      }
    return ( 
        <div>
            <div className="flex justify-between pt-[30px]" key={index}>
                            <div className="text-[24px] text-[#212529]">{items?.ten_sp}</div>
                            <div className="flex">
                                <div className="hover:underline text-[#0168fa]  text-sm">Đánh giá</div>
                                <div className="hover:underline text-[#0168fa] pl-[20px] text-sm">So sánh</div>
                            </div>
                        </div>
                <div className="flex">
                    <div className="">
                        <div className=" pt-[20px] ">
                            <div className="fame-productdetail ">
                                <div className="relative">
                                    <img className="w-[310px]  ml-[160px] pt-[50px] " src={items?.hinh} alt="" />
                                </div>
                            </div>
                            <div className="flex justify-center  gap-7 pt-[30px]">
                                <div className=" justify-center">
                                    <div className="text-[46px] text-[#444b52] hover:text-[#0168fa]">
                                        <IoMdImages />
                                    </div>
                                    <div className="text-[14px] text-[#444b52]  hover:text-[#0168fa] text-center"> 
                                        Xem thêm 20 ảnh 
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-[46px] text-[#444b52] hover:text-[#0168fa]" >
                                        <CiYoutube/>
                                    </div>
                                    <div>
                                        Video trên tay
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-[46px] text-[#444b52] hover:text-[#0168fa]">
                                        <FaBoxOpen />
                                    </div>
                                    <div>
                                        Có gì trong hộp
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-[46px] text-[#444b52] hover:text-[#0168fa]">
                                    <Tb360View />
                                    </div>
                                    <div>
                                        Ảnh 360 độ 
                                    </div>
                                </div>
                            </div>
                            <div className="pt-[20px]">
                                <div className="border border-gray-50 rounded-md   bg-[#e9ecef]">
                                    <div className="pl-[30px] pt-[10px] pb-[20px]">
                                        <div  className="flex pt-[15px]">
                                            <div className="text-[25px] text-[#b6bfc7] pr-[8px]"  >
                                                <BsCpuFill />
                                            </div>
                                            <div className="text-[16px] text-[#495057] ">CPU:  {items?.CPU}</div>
                                        </div>
                                        <div  className="flex pt-[15px]">
                                            <div className="text-[25px] text-[#b6bfc7] pr-[8px]"  >
                                            <BiSolidMemoryCard />
                                            </div>
                                            <div className="text-[16px] text-[#495057] ">Ram: {items?.RAM}</div>
                                        </div>
                                        <div  className="flex pt-[15px]">
                                            <div className="text-[25px] text-[#b6bfc7] pr-[8px]"  >
                                                <MdOutlineScreenshotMonitor/>
                                            </div>
                                            <div className="text-[16px] text-[#495057] "> SSD :{items?.Dia}</div>
                                        </div>
                                        <div  className="flex pt-[15px]">
                                            <div className="text-[25px] text-[#b6bfc7] pr-[8px]"  >
                                            <IoColorPaletteSharp />
                                            </div>
                                            <div className="text-[16px] text-[#495057] "> Màu sắc :{items?.Mausac}</div>
                                        </div>
                                        <div  className="flex pt-[15px]">
                                            <div className="text-[25px] text-[#b6bfc7] pr-[8px]"  >
                                            <GiWeight />
                                            </div>
                                            <div className="text-[16px] text-[#495057] ">Khối lượng :{items?.Cannang}Kg</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-[30px]">
                               <div className="">
                                    <div className="flex pb-[10px] ">
                                        <div className="text-[24px]  text-[#939ca3] pr-[10px]" ><GiTargetPrize /></div>
                                        <div className="text-[14px] text-[#444b52]">Hàng chính hãng</div>
                                    </div>
                                    <div className="flex  pb-[10px]">
                                        <div className="text-[24px] text-[#939ca3] pr-[10px]" ><GiTargetPrize /></div>
                                        <div className="text-[14px] text-[#444b52]">Hàng chính hãng</div>
                                    </div>
                                    <div className="flex pb-[10px] ">
                                        <div className="text-[24px] text-[#939ca3] pr-[10px]" ><GiTargetPrize /></div>
                                        <div className="text-[14px] text-[#444b52]">Hàng chính hãng</div>
                                    </div>
                                    <div className="flex pb-[10px]">
                                        <div className="text-[24px] text-[#939ca3]"><GiTargetPrize /></div>
                                        <div className="text-[14px] text-[#444b52]">Hàng chính hãng</div>
                                    </div>
                               </div>
                               <div className="ml-[150px] ">
                                    <div className="flex pb-[10px] ">
                                        <div className="text-[24px] text-[#939ca3] pr-[10px]" ><GiTargetPrize /></div>
                                        <div className="text-[14px] text-[#444b52]">Hàng chính hãng</div>
                                    </div>
                                    <div className="flex  pb-[10px]">
                                        <div className="text-[24px] text-[#939ca3] pr-[10px]" ><GiTargetPrize /></div>
                                        <div className="text-[14px] text-[#444b52]">Hàng chính hãng</div>
                                    </div>
                                    <div className="flex pb-[10px]">
                                        <div className="text-[24px] text-[#939ca3] pr-[10px]" ><GiTargetPrize /></div>
                                        <div className="text-[14px] text-[#444b52]">Hàng chính hãng</div>
                                    </div>
                                    <div className="flex pb-[10px]">
                                        <div className="text-[24px] text-[#939ca3]"><GiTargetPrize /></div>
                                        <div className="text-[14px] text-[#444b52]">Hàng chính hãng</div>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className=" pt-[20px] pl-[31px]">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="font-medium text-[32px] text-[#cb1c22]">{formatVND(items?.gia_km)} đ </div>
                                <div className="line-through pl-[10px] text-[#99a2aa] text-[20px]">{formatVND(items?.gia)} đ</div>
                            </div>
                            <div className="ml-[100px]" >
                                <div>
                                    Trả góp chỉ từ 
                                </div>
                                <div>
                                2.071.000₫/ tháng
                                </div>
                            </div>
                        </div>
                        <div className="pt-[30px]">
                            <div className="border border-gray-50   bg-[#e9ecef] rounded">
                                <div className=" font-semibold text-[#212529] text-[14px] py-[8px] px-[10px] ">
                                    Đang khuyễn mãi                       
                                </div>
                                <div className=" font-semibold text-[#212529] text-[14px] py-[5px] px-[10px]   ">
                                    Giảm ngay 4,000,000đ áp dụng đến 20/11
                                </div>
                                <div className="flex  items-center py-[5px] px-[10px]">
                                    <div className="text-[#48bb78] text-[14.5px] ">
                                        <PiCheckCircleDuotone />
                                    </div>
                                    <div className="text-[#444b52] text-[#444b52] pl-[5px]">Tặng Phiếu mua hàng 399,000đ mua Chuột Gaming MSI Clutch GM08/GM03</div>
                                </div>
                                <div className="flex  items-center py-[5px] px-[10px]">
                                    <div className="text-[#48bb78] text-[14.5px] ">
                                        <PiCheckCircleDuotone />
                                    </div>
                                    <div className="text-[#444b52] text-[#444b52] pl-[5px]">Tặng Phiếu mua hàng 399,000đ mua Chuột Gaming MSI Clutch GM08/GM03</div>
                                </div>
                                <div className="flex  items-center py-[5px] px-[10px]">
                                    <div className="text-[#48bb78] text-[14.5px] ">
                                        <PiCheckCircleDuotone />
                                    </div>
                                    <div className="text-[#444b52] text-[#444b52] pl-[5px]">Tặng Phiếu mua hàng 399,000đ mua Chuột Gaming MSI Clutch GM08/GM03</div>
                                </div>
                                <div className="flex  items-center py-[5px] px-[10px]">
                                    <div className="text-[#48bb78] text-[14.5px] ">
                                        <PiCheckCircleDuotone />
                                    </div>
                                    <div className="text-[#444b52] text-[#444b52] pl-[5px]">Tặng Phiếu mua hàng 399,000đ mua Chuột Gaming MSI Clutch GM08/GM03</div>
                                </div>
                                <div className="flex  items-center py-[5px] px-[10px]">
                                    <div className="text-[#48bb78] text-[14.5px] ">
                                        <PiCheckCircleDuotone />
                                    </div>
                                    <div className="text-[#444b52] text-[#444b52] pl-[5px]">Tặng Phiếu mua hàng 399,000đ mua Chuột Gaming MSI Clutch GM08/GM03</div>
                                </div>
                            </div>
                            <div className="pt-[20px]">
                                <div className="flex items-center">
                                    <div className="border border-gray-100 rounded p-[5px]">
                                        <img className="w-[48px] h-[48px]"  src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/Vnapy-1693370130549.png" alt="" />
                                    </div>
                                    <div className="pl-[10px]">
                                        <div className="font-semibold text-black text-[15px]">
                                            Cổng thanh toán VNPay
                                        </div>
                                        <div className="text-[#444b52] text-[14px]">
                                            Nhập mã FPTLAP giảm 250,000đ khi thanh toán 100% qua VNPAY-QR.
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-[20px]">
                                    <Link to={routesConfig.cart} onClick={handleBuyNow} >
                                        <div  className="border border-gray-100 bg-[#cb1c22] rounded py-[10px] px-[23px]  hover:bg-red-700 cursor-pointer">
                                            <div className="text-center text-white text-[20px] font-medium">
                                                Mua Ngay
                                            </div>
                                            <div className="text-white text-center text-[13px]">
                                                Giao hàng miễn phí và nhận tại shop
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="flex pt-[10px] justify-between">
                                        <div className="border-gray-100 py-[10px] px-[50px]  bg-[#0664f9] rounded hover:bg-blue-700 cursor-pointer">
                                            <div className="text-white text-center text-[13px]">
                                                TRẢ GÓP 0%
                                            </div>
                                            <div className="text-white text-center text-[13px]">
                                                Duyệt nhanh qua điện thoại
                                            </div>
                                        </div>
                                        <div className="border-gray-100 py-[10px] px-[24px]  bg-[#0664f9] rounded hover:bg-blue-700 cursor-pointer">
                                            <div className="text-white text-center text-[13px]">
                                                TRẢ GÓP QUA THẺ
                                            </div>
                                            <div className="text-white text-center text-[13px]">
                                                VISA, MASTER CARD ,JCB,AMEX
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex pt-[20px] justify-between">
                                    <div>Gọi 1800-6601 để được tư vấn mua hàng (Miễn phí)</div>
                                    <div className="text-[#0664f9]"> Tìm shop có hàng gần nhất</div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
        </div>
     );
}

export default ItemProductDetails;