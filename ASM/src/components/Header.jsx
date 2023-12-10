import logo from '../../public/images/logo-ftpShop.png';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { GrNotes } from 'react-icons/gr';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
import { Link } from 'react-router-dom';
import routesConfig from '../config/routesConfig';
import { TbShoppingCartHeart } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authentocatinSilce';
const Header = () => {
  const cartData = useSelector((state) => state.cart.data) || [];
  const cartLength = cartData.length
  const user = useSelector((state) => state.authentocatin.user);
  const logged = useSelector((state) => state.authentocatin.logged)
  const dispatch = useDispatch();
  

  return (
    <div className='bg-color-bg'>
      <div className='flex h-[60px] p-4 lg:pl-[160px] lg:pr-[160px]'>
        <Link to={routesConfig.home} className='w-[185px] h-[40px] '>
          <img src={logo} alt='Logo' />
        </Link>
        <div className='flex items-center flex-grow lg:pl-[55px]'>
          <div className='flex items-center w-full rtl'>
            <input
              className='rounded-s-sm w-full h-[38px] px-4'
              placeholder='Nhập tên điện thoại, phụ kiện, máy tính... cần tìm'
              type='search'
            />
            <button className='border px-[15px] py-[10px] bg-color-bg-menu'>
              <FaMagnifyingGlass className='text-white' />
            </button>
          </div>
        </div>
        <div className='flex items-center space-x-4 lg:pl-8'>
          <div className='flex items-center flex-col'>
            <div>
              <GrNotes className='text-white text-2xl' />
            </div>
            <div className='text-sm'>Thông tin hay</div>
          </div>
          <div className='flex items-center flex-col'>
            <MdOutlinePayments className='text-white text-2xl text-center' />
            <div className='text-sm'>Thanh toán & tiện ích</div>
          </div>
          <Link to={routesConfig.login} className='flex items-center flex-col' onClick={logged ? () => dispatch(logout()) : null}>
                  {logged ? <IoIosLogOut className='text-white text-2xl' /> : <FaUserCircle className='text-white text-2xl' />}
              <div className='text-sm'>{logged ? user.name : 'Tài khoản của tôi'}</div>
          </Link>
          <Link to={routesConfig.cart} className='flex items-center flex-col relative'>
            <TbShoppingCartHeart  className='text-white text-2xl' />
           <div  className='text-sm'>Giỏ hàng</div> 
           <div className='cartLength  absolute border rounded-full border-none bg-[#f5a623] '>
            <p className='px-[4px] pt-[2px] text-[10px] text-center text-white'>
              {cartLength}
            </p>
           </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
