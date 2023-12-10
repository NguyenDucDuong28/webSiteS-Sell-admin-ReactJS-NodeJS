import Image from "../Image";

function ItemBanner({src,name}) {
    return ( 
        <div className="w-full h-full">
            <Image src={src}/>
        </div>
     );
}

export default ItemBanner;