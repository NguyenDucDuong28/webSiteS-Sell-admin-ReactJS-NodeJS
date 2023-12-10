
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {



    return (
        <div className="flex flex-col pt-4 ">
        {/* Your main content goes here */}

        <footer className="bg-[#ffffff] text-black p-8 rounded">
          <div className="container mx-auto flex flex-wrap justify-between items-start">
            <div className="w-full md:w-1/4 lg:w-1/6 mb-8">
              <h2 className="text-xl font-bold mb-4">FPT Shop</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eleifend nisi.</p>
            </div>
            <div className="w-full md:w-1/4 lg:w-1/6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="list-none p-0">
                <li className="mb-2"><a href="#" className="text-[#0664f9] hover:text-black">Home</a></li>
                <li className="mb-2"><a href="#" className="text-[#0664f9] hover:text-black">Products</a></li>
                <li className="mb-2"><a href="#" className="text-[#0664f9] hover:text-black">Services</a></li>
                {/* Add more links as needed */}
              </ul>
            </div>
            <div className="w-full md:w-1/4 lg:w-1/6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-black">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" className="text-black">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="#" className="text-black">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                {/* Add more social icons as needed */}
              </div>
            </div>
            <div className="w-full md:w-1/4 lg:w-1/6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Email: contact@fptshop.com</p>
              <p className="mb-2">Phone: 123-456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4">
            <p className="text-sm text-center text-gray-500">&copy; © 2007 - 2023 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT / Địa chỉ: 261 - 263 Khánh Hội, P2, Q4, TP. Hồ Chí Minh / GPĐKKD số 0311609355 do Sở KHĐT TP.HCM cấp ngày 08/03/2012. GP số 47/GP-TTĐT do sở TTTT TP HCM cấp ngày 02/07/2018. Điện thoại: (028) 7302 3456. Email: fptshop@fpt.com. Chịu trách nhiệm nội dung: Nguyễn Trịnh Nhật Linh..</p>
          </div>
        </footer>
      </div>
    );
};

export default Footer;