// GetLapTop.js
import { useState } from 'react';
import LapTopList from './LapTopList';
// import GetLapTopSkeleton from './GetLapTopSkeleton';
import ReactPaginate from 'react-paginate';
import useSWR from 'swr';
import { fetcher } from '../../../config';
const itemsPerPage = 20;
const GetLapTop = () => {
    // const [loading,setLoading] = useState(true);
   
    const [itemOffset, setItemOffset] = useState(0);
  const { data } = useSWR(
    `http://localhost:4000/laptop/sptrongloai/1`,
    fetcher
  );
  if (Array.isArray(data)) {
    // console.log(data);
  } else {
    console.error('Data is not an array');
  }
  if (!data) return null;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const toIndex = itemOffset + itemsPerPage;
  const arr = data.slice(itemOffset, toIndex);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
    return (
        <div className="">
            <div className='grid grid-cols-1 lg:grid-cols-4  sm:grid-cols-2 md:grid-cols-3 '>
            {arr.map((product ,index) => (
                <LapTopList key={index} product={product}/>))}
            </div>
            <div className='paginate flex items-center justify-center p-10'>
            <ReactPaginate
            breakLabel="..."
            nextLabel={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            }
            renderOnZeroPageCount={null}
          />
          </div>
        </div>
        
    );
};

export default GetLapTop;
