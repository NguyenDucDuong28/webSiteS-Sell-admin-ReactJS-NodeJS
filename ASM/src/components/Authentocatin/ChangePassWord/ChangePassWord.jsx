import { useState } from 'react';
import { Link } from "react-router-dom";
import routesConfig from "../../../config/routesConfig";
import { useNavigate} from 'react-router-dom'
const ChangePassWord = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    const newPassword = event.target[2].value;

    // Kiểm tra xem email, mật khẩu cũ và mật khẩu mới có được cung cấp không
    if (!email || !password || !newPassword) {
      setError('Email, mật khẩu cũ và mật khẩu mới là bắt buộc');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/users/changepassword', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, newPassword })
      });
    
      if (!response.ok) {
        const text = await response.text();
        try {
          const errorData = JSON.parse(text);
          throw new Error(errorData.error);
        } catch (error) {
          throw new Error(text);
        }
      }
    
      const data = await response.json();
      console.log(data,'data');
      navigate('/login')
    } catch (error) {
      setError(error.message);
    }
  };
  console.log(handleSubmit);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 bg-white p-12 rounded shadow">
        <h2 className="text-4xl mb-6 text-purple-500 font-bold">Đổi mật khẩu</h2>
        <h3 className="text-2xl mb-6 text-gray-700">Welcome!</h3>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input className="w-full p-2 mb-6 rounded" type="email" placeholder="Email address" />
          <input className="w-full p-2 mb-6 rounded" type="password" placeholder="Mật khẩu cũ" />
          <input className="w-full p-2 mb-6 rounded" type="password" placeholder="Mật khẩu mới" />
          <button type="submit" className="w-full p-2 mb-6 rounded bg-purple-500 text-white">Đổi mật khẩu</button>
        </form>
        <div className="flex justify-center mt-6 gap-2">
          <button className="w-full p-2 mb-2 rounded bg-blue-500 text-white">Đăng nhập bằng Facebook</button>
          <button className="w-full p-2 mb-2 rounded bg-red-500 text-white">Đăng nhập bằng Google</button>
        </div>
        <Link to={routesConfig.login} className="flex justify-center mt-6">
          <a href="#" className="text-purple-500">Quay lại trang đăng nhập</a>
        </Link>
      </div>
    </div>
  );
};

export default ChangePassWord;
