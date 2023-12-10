var express = require("express");
var router = express.Router();
const mysql = require("mysql");
const { route } = require(".");
const e = require("express");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "laptop_react",
});
db.connect(() => console.log("Connect database !"));

//http://localhost:4000/laptop/moi/2
router.get("/moi/:sosp?", function (req, res) {
  let sosp = parseInt(req.params.sosp || 1);
  if (sosp <= 1) sosp = 1;
  let sql =
    "SELECT id_sp, ten_sp, gia, hinh, ngay soluotxem FROM sanpham ORDER BY ngay desc LIMIT 0, ?";
  db.query(sql, sosp, (err, data) => {
    if (err) res.json({ "thong bao": "Loi lay list sp", err });
    else res.json(data);
  });
});

// http://localhost:4000/laptop/sp/1
router.get("/sp/:id", function (req, res) {
  let id = parseInt(req.params.id);
  if (id <= 0) {
    res.json({ "thong bao": "Khong tim thay san pham", id: id });
    return;
  }
  let sql = "SELECT * FROM sanpham WHERE id_sp = ?";
  db.query(sql, id, (err, data) => {
    if (err) res.json({ "thong bao": "Loi lay san pham", err });
    else res.json(data[0]);
  });
});
// http://localhost:4000/laptop/sptrongloai/1
router.get("/sptrongloai/:id_loai", function (req, res) {
  let id_loai = parseInt(req.params.id_loai);
  if (id_loai <= 0) {
    res.json({ "thong bao": "Khong tim thay loai", id_loai: id_loai });
    return;
  }
  let sql =
    "SELECT id_sp, ten_sp, gia, hinh,gia_km, ngay FROM sanpham WHERE id_loai=? ORDER by id_sp desc";
  db.query(sql, id_loai, (err, data) => {
    if (err) res.json({ "thong bao": "Loi lay san pham trong loai", err });
    else res.json(data);
  });
});

// http://localhost:4000/laptop/loai/
router.get("/loai", function (req, res) {
  let sql = "SELECT id_loai, ten_loai FROM loai";

  db.query(sql, (err, data) => {
    if (err) {
      console.error("Lỗi truy vấn SQL:", err);
      res.json({ "thong bao": "Có lỗi xảy ra khi lấy thông tin loại" });
    } else {
      res.json(data);
    }
  });
});
// http://localhost:4000/laptop/loai/1
router.get("/loai/:id_loai", function (req, res) {
  let id_loai = parseInt(req.params.id_loai);
  let sql = "SELECT id_loai, ten_loai FROM loai WHERE id_loai= ?";
  db.query(sql, id_loai, (err, data) => {
    if (err) res.json({ "thong bao": "Loi lay loai", err });
    else res.json(data[0]);
  });
});

// http://localhost:4000/laptop/sanpham?page=1&pageSize=10
router.get("/sanpham", function (req, res) {
  let page = parseInt(req.query.page) || 1;
  let pageSize = parseInt(req.query.pageSize) || 10;
  let startIndex = (page - 1) * pageSize;
  let sql = "SELECT * FROM sanpham LIMIT ?, ?";
  db.query(sql, [startIndex, pageSize], (err, data) => {
    if (err) {
      console.error("Lỗi truy vấn SQL:", err);
      res.json({ "thong bao": "Có lỗi xảy ra khi lấy thông tin sản phẩm" });
    } else {
      res.json(data);
    }
  });
});
// http://localhost:4000/laptop/sanpham/search?keyword=MSI
router.get("/sanpham/search", function (req, res) {
  // let ten_sp = parseInt(req.params.ten_sp);
  const keyword = req.query.keyword;
  if (!keyword) {
    res.json({ "thong bao": "Vui lòng nhập từ khóa tìm kiếm" });
    return;
  }
  let sql = "SELECT * FROM sanpham WHERE ten_sp LIKE ?";
  db.query(sql, [`%${keyword}%`], (err, data) => {
    if (err) {
      console.error("Lỗi truy vấn SQL:", err);
      res.json({ "thong bao": "Có lỗi xảy ra khi tìm kiếm sản phẩm" });
    } else {
      res.json(data);
    }
  });
});

// http://localhost:4000/laptop/sanphamchitiet/1
router.get("/sanphamchitiet/:id_sp", (req, res) => {
  let sp_id = parseInt(req.params.id_sp);

  const query = `
    SELECT sanpham.*, sanphamchitiet.*
    FROM sanpham
    JOIN sanphamchitiet ON sanpham.id_sp = sanphamchitiet.id_sp
    WHERE sanpham.id_sp = ?
  `;

  db.query(query, sp_id, (error, results, fields) => {
    if (error) {
      // Xử lý lỗi nếu cần
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Kiểm tra nếu không có kết quả
    if (results.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Trả về thông tin sản phẩm và chi tiết sản phẩm
    res.json(results[0]);
  });
});
// http://localhost:4000/laptop/sanphamchitiet
router.post("/themsp/", (req, res) => {
  let data = req.body;
  let sql = `INSERT INTO sanpham SET ?`;
  db.query(sql, data, function (err, data) {
    if (err)
      res.json({
        thongbao: "Thêm sản phẩm thành công",
      });
    else {
      res.json(res.json(), { thongbao: "Thêm mới không thành công " });
    }
  });
});

// http://localhost:4000/laptop/luudonhang
router.post("/luudonhang/", function (req, res) {
  let data = req.body;
  let sql = `INSERT INTO don_hang SET ?`;
  db.query(sql, data, function (err, data) {
    if (err)
      res.json({
        id_dh: -1,
        thongbao: "Lỗi lưu đơn hàng",
        err,
      });
    else {
      id_dh = data.insertId;
      res.json({ id_dh: id_dh, thongbao: "Đã lưu đơn hàng" });
    }
  });
});
// http://localhost:4000/laptop/luugiohang
router.post("/luugiohang/", function (req, res) {
  let data = req.body;
  let sql = `INSERT INTO don_hang_chi_tiet SET ?`;
  db.query(sql, data, function (err, d) {
    if (err) res.json({ thongbao: "Lỗi lưu sp", err });
    else res.json({ thongbao: "Đã lưu sp vào db", id_sp: data.id_sp });
  });
});


//http:localhost:4000/laptop/search
router.get("/search", (req, res) => {
  const { query } = req.query;

  // Tạo câu truy vấn SQL
  const sql = 'SELECT * FROM sanpham WHERE name LIKE ?';

  // Thực hiện truy vấn
  db.query(sql, [`%${query}%`], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
