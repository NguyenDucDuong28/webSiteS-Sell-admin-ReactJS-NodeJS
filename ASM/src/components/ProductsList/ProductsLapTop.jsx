import GetLapTop from "./LapTop/GetLapTop";
import TitleHot from "../Title/TitleHot";



const ProductsLapTop = () => {
    return (
        <div className="max-w-[1200px] mx-auto pt-3">
            <div className="w-full border rounded-lg bg-white">
                <TitleHot/>
                <GetLapTop/>
            </div>
        </div>
    );
};

export default ProductsLapTop;