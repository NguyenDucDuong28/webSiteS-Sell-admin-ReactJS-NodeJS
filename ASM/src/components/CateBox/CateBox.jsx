
import ItemCateBox from "./ItemCateBox"
import {getCateBox} from "../constant/CateBox"
const CateBox = () => {
    return (
        <div className="max-w-[1200px] mx-auto  pt-3">
                <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6  bg-white">
                    {getCateBox.map((item,index) =>(
                        <ItemCateBox 
                            src={item.src}
                            name={item.name}
                            key={index}
                        />
                    ))}
            </div>
            <div className="pt-[26px]"> 
                <img src="https://images.fpt.shop/unsafe/fit-in/1200x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/11/14/638355538186355267_H7_1200x100.png" alt="" />
            </div>
        </div>
    );
};

export default CateBox;