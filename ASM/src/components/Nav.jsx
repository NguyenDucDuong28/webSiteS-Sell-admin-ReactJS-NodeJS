import {FaSimCard} from "react-icons/fa"
import {MdPhoneAndroid} from "react-icons/md"
import {GrPersonalComputer} from "react-icons/gr"
import {BsFillTabletLandscapeFill} from "react-icons/bs"
import {AiFillApple} from "react-icons/ai"
import {HiOutlineDesktopComputer}from "react-icons/hi"
import {SlEarphonesAlt} from "react-icons/sl"
import {IoReloadSharp} from "react-icons/io5"
import {TbHomeCog} from "react-icons/tb"
import {CiDiscount1} from "react-icons/ci"
const Nav = () => {
    return (
        <div className="w-full ">
            <div className='bg-color-bg-nav h-[36px] '>
                <div className='flex justify-center items-center pt-[6px] '>
                    <div className="group inline-block">
                        <div className='flex pl-[16px] cursor-pointer focus:outline-none flex items-center'>
                            <div className='flex-1 items-center  '>
                                <MdPhoneAndroid className='text-white pr-1 text-2xl'></MdPhoneAndroid>
                            </div>
                            <div className='text-white text-sm'>
                                ĐIỆN THOẠI
                            </div>
                            <div className="bg-white rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out  mt-[216px] ">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">iPhone 15 Pro Max</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Samsung Galaxy S21</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Huawei P40 Pro+</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Huawei P40 Pro+</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Huawei P40 Pro+</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex pl-[16px]' >
                        <div className='flex items-center  '>
                            <GrPersonalComputer className='text-white pr-1 text-2xl'></GrPersonalComputer>
                        </div>
                        <div className='text-white text-sm'>
                            LAPTOP
                        </div>
                    </div>
                    <div className='flex pl-[16px]' >
                        <div className='flex items-center  '>
                            <BsFillTabletLandscapeFill className='text-white pr-1 text-2xl'></BsFillTabletLandscapeFill>
                        </div>
                        <div className='text-white text-sm'>
                            MÁY TÍNH BẢNG
                        </div>
                    </div>
                    <div className='flex pl-[16px]' >
                        <div className='flex items-center  '>
                            <AiFillApple className='text-white pr-1 text-2xl'></AiFillApple>
                        </div>
                        <div className='text-white text-sm'>
                            Apple
                        </div>
                    </div>
                    <div className='flex pl-[16px]' >
                        <div className='flex items-center '>
                            <HiOutlineDesktopComputer className='text-white pr-1 text-2xl'></HiOutlineDesktopComputer>
                        </div>
                        <div className='text-white text-sm'>
                            PC-LINH KIỆN
                        </div>
                    </div>
                    <div className='flex pl-[16px]' >
                        <div className='flex items-center'>
                            <SlEarphonesAlt className='text-white pr-1 text-2xl'></SlEarphonesAlt>
                        </div>
                        <div className='text-white text-sm'>
                            TAI NGHE
                        </div>
                    </div>
                    <div className='flex pl-[16px]' >
                        <div className='flex items-center'>
                            <IoReloadSharp className='text-white pr-1 text-2xl'></IoReloadSharp>
                        </div>
                        <div className='text-white text-sm'>
                            MÁY CŨ GIÁ RẺ
                        </div>
                    </div>
                    <div className='flex pl-[16px]' >
                        <div className='flex items-center'>
                            <TbHomeCog className='text-white pr-1 text-2xl'></TbHomeCog>
                        </div>
                        <div className='text-white text-sm'>
                            ĐIỆN MÁY GIA DỤNG
                        </div>
                    </div>
                    <div className='flex pl-[16px]' >
                        <div className='flex items-center'>
                            <FaSimCard className='text-white pr-1 text-2xl'></FaSimCard>
                        </div>
                        <div className='text-white text-sm'>
                            SIM & THẺ
                        </div>
                    </div>
                    <div className='flex pl-[16px]' >
                        <div className='flex items-center'>
                            <CiDiscount1 className='text-white pr-1 text-2xl'></CiDiscount1>
                        </div>
                        <div className='text-white text-sm'>
                            KHUYỄN MÃI
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};
export default Nav;