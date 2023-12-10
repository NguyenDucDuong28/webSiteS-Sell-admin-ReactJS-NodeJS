import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import { xoaSP } from "../actions/cartSilce";
import { useDispatch, useSelector } from 'react-redux';
import ButtonGarbage from "../components/Button/ButtonGarbage";

const DeleteNotifications = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart) || [];
  console.log(cartData);
  const handleDelete = () => {
    dispatch(xoaSP(data?.id_sp)); 
    console.log(dispatch(xoaSP(data?.id_sp)));
    setIsOpen(false);
  }

  return (
    <div className="px-4 grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className=""
      >
       <ButtonGarbage/>
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} handleDelete={handleDelete} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen, handleDelete }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          > 
          
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10 ">
               <div className="text-center">
                  <img className="inline-block" src="https://fptshop.com.vn/estore-images/mascot-remove.png" alt="" />
                  <p className="text-[15px]">Bạn chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?</p>
               </div>
              <div className="flex gap-2 pt-[30px]">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Trời lại
                </button>
                <div
                  onClick={handleDelete}
                  className="bg-white hover:opacity-90 transition-opacity text-center text-indigo-600 font-semibold w-full py-2 rounded"
                >
                 Xóa
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeleteNotifications;
