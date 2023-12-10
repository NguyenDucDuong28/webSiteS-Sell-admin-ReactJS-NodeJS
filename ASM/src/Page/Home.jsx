import Banner from "../components/Banner/Banner";
import CateBox from "../components/CateBox/CateBox";
import ProductsLapTop from "../components/ProductsList/ProductsLapTop";
import ProductsPhone from "../components/ProductsList/ProductsPhone";

function Home() {
    return ( 
        <div>
            <Banner/>
            <CateBox/>
            <ProductsPhone/>
            <ProductsLapTop/>
        </div>
     );
}

export default Home;