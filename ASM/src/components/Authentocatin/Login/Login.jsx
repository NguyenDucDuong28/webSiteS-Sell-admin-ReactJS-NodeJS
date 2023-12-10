import { Link, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logged, logout } from "../../../actions/authentocatinSilce";
import routesConfig from "../../../config/routesConfig";
import { useState ,useEffect} from 'react';
import {useLocation} from 'react-router-dom'
const Login = () => {
  const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const expiresIn = useSelector((state) => state.authentocatin.expiresIn);
    
    useEffect(() => {
        if (expiresIn > 0) {
            const timer = setTimeout(() => {
                dispatch(logout());
                // Thực hiện các hành động khác khi người dùng bị đăng xuất, ví dụ:
                // alert('Bạn đã bị đăng xuất do hết thời gian phiên làm việc.');
                navigate('/login');
            }, expiresIn * 1000); // `expiresIn` phải được chỉ định bằng giây

            // Hủy hẹn giờ khi component unmount
            return () => clearTimeout(timer);
        }
    }, [dispatch, expiresIn, navigate]);

    const loginAPI = async (email, password) => {
        const response = await fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
          // const { token } = await response.json();
          // localStorage.setItem('authToken', token);
            const errorData = await response.json();
            throw new Error(errorData.error);
        }

        const data = await response.json();
        console.log(data,"data");
        return data;
    };

    const handleSubmit = async (event) => {   
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;

        // Kiểm tra xem email và password có được cung cấp không
        if (!email || !password) {
            setError('Email và mật khẩu là bắt buộc');
            return;
        }

        try {
            const userData = await loginAPI(email, password); 
            if (userData.message === "Đăng Nhập Thành Công") {
                dispatch(logged(userData));
                let from = location.state ? location.state.from : { pathname: "/" };
                console.log('path', from);
                navigate(from);
            } else {
                setError(userData.error);
            }
        } catch (error) {
            setError(error.message);
        }
      };
    
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="w-1/3 bg-white p-12 rounded shadow">
          <h2 className="text-4xl mb-6 text-purple-500 font-bold">Đăng nhập</h2>
          <h3 className="text-2xl mb-6 text-gray-700">Welcome!</h3>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input className="w-full p-2 mb-6 rounded" type="email" placeholder="Email address" />
            <input className="w-full p-2 mb-6 rounded" type="password" placeholder="Password" />
            <div className="flex items-center mb-6">
              <input type="checkbox" id="remember" name="remember" />
              <label className="ml-2 text-gray-700" htmlFor="remember">Ghi nhớ đăng nhập</label>
            </div>
            <button type="submit" className="w-full p-2 mb-6 rounded bg-purple-500 text-white">Đăng nhập</button>
          </form>
          <Link to={routesConfig.forgotpassword} className="flex justify-center">
            <a  className="text-purple-500">Quên mật khẩu?</a>
          </Link>
          <div className="flex justify-center mt-6 gap-2">
            <button className="w-full p-2 mb-2 rounded bg-blue-500 text-white">Đăng nhập bằng Facebook</button>
            <button className="w-full p-2 mb-2 rounded bg-red-500 text-white">Đăng nhập bằng Google</button>
          </div>
          <div className="flex justify-center justify-evenly">
            <Link to={routesConfig.register}  className="flex justify-center mt-6">
              <a  className="text-purple-500">Tạo tài khoản mới</a>
            </Link>
            <Link to={routesConfig.changepassword}  className="flex justify-center mt-6">
              <a  className="text-purple-500">Đổi mật khẩu</a>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Login;
