

import  { createContext} from 'react';
import './PhoneList.css';
import { GetPhone } from '../../constant/ProductPhone';
import ItemPhoneList from './ItemPhoneList';

// Tạo Context
export const PhoneContext = createContext();

const PhoneList = () => {
  return (
    // Sử dụng Context để chứa dữ liệu GetPhone
    <PhoneContext.Provider value={GetPhone}>
      <div>
        <div className=" grid grid-cols-1 lg:grid-cols-4  sm:grid-cols-2 md:grid-cols-3 ">
          {GetPhone.map((posts, index) => (
            <div className="w-[300px] rounded-sm p-3 hover:shadow-[0_0_2px_4px_rgba(200,200,200,0.5)] duration-200 hover:cursor-pointer  " key={index}>
                <ItemPhoneList
                    src={posts.src}
                    name={posts.name}
                    cost={posts.cost}
                    promotional={posts.promotional}
                />
            </div>
          ))}
        </div>
      </div>
    </PhoneContext.Provider>
  );
};

export default PhoneList;
