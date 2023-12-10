var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var mysql = require("mysql");
var jwt = require("jsonwebtoken");
const { Sequelize } = require("sequelize");
const nodemailer = require("nodemailer");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "laptop_react",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL!");
});
// Lấy tài khoản
router.get("/getuser", function (req, res, next) {
  con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});
// tạo tài khoản
// http://localhost:4000/users/register
router.post("/register", function (req, res, next) {
  try {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    // Kiểm tra dữ liệu
    if (!name || !email || !password) {
      return res.json({ error: "Vui lòng nhập đủ dữ liệu" });
    }

    // Kiểm tra độ dài tên
    if (name.length > 50 || name.length < 6) {
      return res.json({ error: "Tên người dùng phải có từ 6 đến 50 ký tự" });
    }

    // Kiểm tra email đã tồn tại trong db chưa
    con.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
          return res.json({ error: "Email này đã tồn tại" });
        } else {
          // Mã hóa mật khẩu
          var salt = bcrypt.genSaltSync(10);
          var hashPassword = bcrypt.hashSync(password, salt);

          // Tạo mới user
          con.query(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashPassword],
            function (err, result) {
              if (err) throw err;
              res.json({ message: "Tạo tài khoản thành công", result });
            }
          );
        }
      }
    );
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Đổi mật khẩu
// http:/localhost:4000/users/changepassword
router.put("/changepassword", function (req, res, next) {
  const { email, password, newPassword } = req.body;

  if (!newPassword) {
    return res.status(400).json("Mật khẩu mới không được để trống");
  }

  con.query(
    "SELECT password FROM users WHERE email = ?",
    [email],
    function (err, result) {
      if (err) {
        return res.status(500).json(err.message);
      }

      if (result.length === 0) {
        return res.status(400).json("Không tìm thấy người dùng với email này");
      }

      const user = result[0];

      if (
        !password ||
        typeof password !== "string" ||
        !user.password ||
        typeof user.password !== "string"
      ) {
        return res.status(400).json("Mật khẩu không hợp lệ");
      }

      const check = bcrypt.compareSync(password, user.password);

      // if (!check) {
      //   return res.status(400).send("Mật khẩu không chính xác");
      // }

      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(newPassword, salt);

      con.query(
        "UPDATE users SET password = ? WHERE email = ?",
        [hashPassword, email],
        function (err, result) {
          if (err) {
            return res.status(500).json(err.message);
          }

          res.json("Bạn đã đổi mật khẩu thành công");
        }
      );
    }
  );
});

// Đăng nhập tài khoản
// htpp://localhost:4000/users/login/
router.post("/login", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  con.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    function (err, result) {
      if (err) throw err;
      if (result.length === 0) {
        return res.json({ error: "Email không tồn tại" });
      }

      var user = result[0];

      // Kiểm tra xem password và user.password có phải là chuỗi không
      if (
        typeof password !== "string" ||
        typeof user.password !== "string" ||
        user.password === ""
      ) {
        return res.json({ error: "Mật khẩu không hợp lệ" });
      }

      var check = bcrypt.compareSync(password, user.password);

      // if (!check) {
      //   return res.json({ error: "Mật Khẩu Không Chính Xác" });
      // }

      var token = jwt.sign({ id: user.id }, "your-secret-key", {
        expiresIn: "1m",
      });

      res.json({ message: "Đăng Nhập Thành Công", user: user, token: token });
    }
  );
});

// lấy  lại mật khẩu
//http://localhost:4000/users/forgotpassword
// Kết nối với cơ sở dữ liệu MySQL
const sequelize = new Sequelize("laptop_react", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// Định nghĩa mô hình User
const User = sequelize.define(
  "users",
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Thêm dòng này
  }
);

router.post("/forgotpassword", async function (req, res, next) {
  const { email } = req.body;

  // Kiểm tra xem email có tồn tại trong cơ sở dữ liệu hay không
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.json({ error: "Email không tồn tại trong cơ sở dữ liệu." });
  }

  const password = generateRandomPassword(); // Generate a random password
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "duongxautrai321@gmail.com",
      pass: "phmklzplxqtwafzy",
    },
  });

  try {
    await transporter.sendMail({
      from: "duongxautrai321@gmail.com",
      to: email,
      subject: "Dương - Reset Password",
      text: `Your new password is: ${password}`,
      html: `<b>Your new password is: ${password}</b>`,
    });

    // Update the user's password in the MySQL database
    await User.update({ password: hashedPassword }, { where: { email } });

    return res.json({
      message: `An email with the new password has been sent to ${email}. Please check your email.`,
    });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Error sending email.", error });
  }
});

function generateRandomPassword() {
  // Implement your logic to generate a random password (e.g., using a library)
  // For demonstration, let's use a simple random string generator
  const length = 10;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}
module.exports = router;
