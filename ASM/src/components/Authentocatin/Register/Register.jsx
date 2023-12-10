import { Link } from "react-router-dom";
import routesConfig from "../../../config/routesConfig";
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const registerAPI = async (name, email, password) => {
        try {
            const response = await axios.post('http://localhost:4000/users/register', {
                name,
                email,
                password
            });

            return response.data;
        } catch (error) {
            if (error.response) {
                // Phản hồi từ server khi yêu cầu không thành công
                throw new Error(error.response.data.error);
            } else if (error.request) {
                // Yêu cầu đã được tạo nhưng không nhận được phản hồi từ server
                throw new Error('Không nhận được phản hồi từ server');
            } else {
                // Lỗi khác khi thiết lập yêu cầu
                throw new Error('Lỗi khi thiết lập yêu cầu');
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;

        // Kiểm tra xem tên, email và mật khẩu có được cung cấp không
        if (!name || !email || !password) {
            setError('Vui lòng nhập đủ dữ liệu');
            return;
        }

        try {
            const userData = await registerAPI(name, email, password);
            console.log(userData);
            if(userData.message === "Tạo tài khoản thành công"){
                navigate('/login')
            }else {
                setError(userData.error)
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
        <div className="w-1/3 bg-white p-12 rounded shadow">
          <h2 className="text-4xl mb-6 text-purple-500 font-bold">Đăng ký</h2>
          <h3 className="text-2xl mb-6 text-gray-700">Welcome!</h3>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input className="w-full p-2 mb-6 rounded" type="text" placeholder="Full Name" />
            <input className="w-full p-2 mb-6 rounded" type="email" placeholder="Email address" />
            <input className="w-full p-2 mb-6 rounded" type="password" placeholder="Password" />
            <div className="flex items-center mb-6">
              <input type="checkbox" id="terms" name="terms" />
              <label className="ml-2 text-gray-700" htmlFor="terms">I agree to the terms of service</label>
            </div>
            <button type="submit" className="w-full p-2 mb-6 rounded bg-purple-500 text-white">Tạo tài khoản</button>
          </form>
          <Link to={routesConfig.login} className="flex justify-center">
            <a href="#" className="text-purple-500">Đăng nhập</a>
          </Link>
          <div className="flex justify-center mt-6 gap-2">
            <button className="w-full p-2 mb-2 rounded bg-blue-500 text-white">Đăng nhập bằng Facebook</button>
            <button className="w-full p-2 mb-2 rounded bg-red-500 text-white">Đăng nhập bằng Google</button>
          </div>
          <div className="flex justify-center mt-6">
            <a href="#" className="text-purple-500">Quên mật khẩu?</a>
          </div>
        </div>
      </div>
    );
};

export default Register;
