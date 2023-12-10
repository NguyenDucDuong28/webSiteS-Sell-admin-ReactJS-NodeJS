import Image from "../../Image";
const ItemPhoneList = ({name, src , cost ,promotional}) => {
    return (
        <div className=" ">
             <div className="fame-product border rounded-lg relative overflow-hidden transform transition-transform duration-300 hover:scale-105 " >
            <div className="relative">
              <Image className="max-h-[168px] absolute top-[35px] left-[40px]" src={src}   />
            </div>
            <div className='absolute text-white mt-40 border rounded-sm py-[3px] pr-3 border-red-500 bg-red-500 font-medium text-sm'>
              1.000.000 đ
            </div>
          </div>
          <div className='font-bold text-[17px] opcity-70 hover:text-blue-500 pt-[13px]'>
            {name}
          </div>
          <div className=' flex items-center justify-between pt-[12px] pb-[12px]'>
            <div className='border border-red-500 font-semibold text-[18px] text-white bg-[#cb1c22] rounded-xl px-3'>
              <p>{promotional}</p>
            </div>
            <div>
              <p className='line-through text-sm text-color-price'> {cost}</p>
            </div>
          </div>
          <div className='border border-none rounded-sm py-4 bg-[#f8f9fa]'>
            <div className='flex pl-3 '>
              <img className='rounded-3xl' src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/t%E1%BA%A3i%20xu%E1%BB%91ng-1695965883711.png" alt="" />
              <img className='rounded-3xl pl-3' src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/Zalopay-1693187470025.png" alt="" />
            </div>
            <div className='text-sm pl-3 pt-3 text-[#555555]'>
                Giảm đến 200.000đ qua Kredivo
            </div>
          </div>
        </div>
    );
};

export default ItemPhoneList;