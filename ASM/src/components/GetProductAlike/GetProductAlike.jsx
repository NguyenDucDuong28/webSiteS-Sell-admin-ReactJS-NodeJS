import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductAlike } from "../../api/ProductAlike";
import ItemGetProductAlike from "./itemGetProductAlike";

const GetProductAlike = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Extract id_sp from the URL using useSearchParams
  const [searchParams] = useSearchParams();
  const id_sp = searchParams.get("id_sp");

  useEffect(() => {
    // Define an async function
    const fetchData = async () => {
      try {
        // Fetch data or perform other asynchronous tasks
        const response = await fetch(`http://localhost:4000/laptop/sptrongloai/${id_sp}`);
        const result = await response.json();

        // Ensure the result is an array before updating the state
        if (Array.isArray(result)) {
          setData(result);
        } else {
          console.error("Invalid data format:", result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    // Call the async function
    fetchData();
  }, [id_sp]); // Include id_sp in the dependency array

  // Check if data is an array before using filter
  const filteredData = Array.isArray(data) ? data.filter(item => item.id_sp === Number(id_sp)) : [];

  console.log("productsAlike", filteredData);

  return (
    <div>
      {loading ? (
        <div>...Loading</div>
      ) : (
        <ItemGetProductAlike items={filteredData} />
      )}
    </div>
  );
};

export default GetProductAlike;