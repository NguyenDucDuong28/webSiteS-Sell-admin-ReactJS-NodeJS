// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../App.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { getBanner } from '../constant/Banner';
import ItemBanner from './ItemBanner';


// '<span class="' + className + '">' + (index + 1) + '</span>'
const Banner = () => {

  // const [active,setActive] = useState(0)


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return `
          <span class="${className}" style="width:auto; padding: 8px; background: transparent">
            <div class="flex flex-col font-bold text-gray-900 hover:text-sm"
              <div class="divide-y divide-blue-200">
                <div class="">
                  ${getBanner[index]?.name}
                </div>
                <div">
                  ${getBanner[index]?.price}
                </div>
              </div>
            </div>
          </span>`;
          
        },
      };
      const handleSwiperClick  = (swiper) => {
        console.log(swiper);
      }
    
    return (    
        <div className='max-w-[1200px] mx-auto'>
            <div className="">
                <div className="w-full pt-3">
                    <img className="" src="https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2023/12/7/638375676523402747_desk-header-1010.png" alt="" />
                </div>
            </div>
            <div className=''>
              <div className='flex content-center  bg-white rounded '>
                <div className='flex  flex-col  p-1  relative '>
                  <Swiper pagination={pagination}modules={[Pagination]}className="mySwiper" onSwiper={handleSwiperClick}  onSlideClick={(swiper) => console.log(swiper)}>
                    {getBanner.map((item,index) => (
                      <SwiperSlide key={index}>
                        <ItemBanner src={item?.src} 
                        name={item?.name}
                        price={item?.price}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper> 
                </div>
                <div className='pl-[5px] pt-1 pb-1 '>
                    <div>
                      <img className='rounded pb-2' src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/31/638343693231994577_F-H2_385x100%20(3).png" alt="" />
                    </div>
                    <div>
                      <img className='rounded ' src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/11/1/638344563400628240_F-H2_385x100.png" alt="" />
                    </div>
                    <div className=''>
                      <div className='text-base font-bold opacity-70 pt-[9px]' >Tin Khuyễn Mãi</div>
                      <div className='flex pb-1 pt-[10px] items-center'>
                        <div>
                          <img className='rounded' src="https://images.fpt.shop/unsafe/fit-in/70x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/140x80(2).png" alt="" />
                        </div>
                        <div className='pl-[10px] '>
                          <div className='font-bold text-sm text-[#1f1f1f]'>
                            FPT Shop giảm ngay 250K qua VNPAY-QR
                          </div>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <div>
                          <img className='rounded' src="https://images.fpt.shop/unsafe/fit-in/70x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/70x40(3).png" alt="" />
                        </div>
                        <div className='pl-[10px]'>
                          <div className='font-bold text-sm  text-[#1f1f1f]'>
                            FPT Shop giảm ngay 250K qua VNPAY-QR
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
};
 
export default Banner;