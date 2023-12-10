import { useState } from 'react';
import { Link } from "react-router-dom";
import routesConfig from "../../../config/routesConfig";
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;

    // Kiểm tra xem email có được cung cấp không
    if (!email) {
      setError('Email là bắt buộc');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/users/forgotpassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Lỗi không xác định từ máy chủ');
      }

      // Kiểm tra xem email có tồn tại trong cơ sở dữ liệu hay không
      if (data.error === 'Email không tồn tại trong cơ sở dữ liệu.') {
        setError(data.error);
        return;
      }

      console.log(data,'data');
      navigate('/login')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 bg-white p-12 rounded shadow">
        <h2 className="text-4xl mb-6 text-purple-500 font-bold">Quên mật khẩu</h2>
        <h3 className="text-2xl mb-6 text-gray-700">Welcome!</h3>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input className="w-full p-2 mb-6 rounded" type="email" placeholder="Email address" />
          <button type="submit" className="w-full p-2 mb-6 rounded bg-purple-500 text-white">Gửi yêu cầu đặt lại mật khẩu</button>
        </form>
        <Link to={routesConfig.login} className="flex justify-center mt-6">
          <a href="#" className="text-purple-500">Quay lại trang đăng nhập</a>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
