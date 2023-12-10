import Image from "../Image";

const ItemCateBox = ({src,name}) => {
    return (
        <div className="border hover:shadow-[0_0_2px_4px_rgba(200,200,200,0.5)] duration-300 hover:cursor-pointer">
            <div className="aspect-[20/20]">
                <div className="p-10  ">
                    <Image className="rounded-full w-[95px] h-[95px]  bg-gray-200" src={src}/>
                </div>
                <div className="text-center text-sm" >
                    {name}
                </div>
            </div>
        </div>
    );
};

export default ItemCateBox;