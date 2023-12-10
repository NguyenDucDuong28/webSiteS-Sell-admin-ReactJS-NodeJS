var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "laptop_react",
});
db.connect(() => console.log("Đã kế nôi datavase!"));
// http://localhost:4000/adminSP/
router.get("/", function (req, res) {
  let sql = `SELECT id_sp, ten_sp,gia, hinh ,ngay,soluotxem ,gia_km FROM sanpham ORDER BY ngay desc`;
  db.query(sql, (err, data) => {
    if (err) res.json({ "thông báo ": "Lỗi lấy list", err });
    else res.json(data);
  });
});

router.put("/:id_sp", function (req, res) {
  let data = req.body;
  let id = req.params.id_sp;
  let sql = "UPDATE sanpham SET ? WHERE id_sp = ?";
  db.query(sql, [data, id], (err, d) => {
    if (err) res.json({ "Thông báo": "Lỗi cập nhật sp", err });
    else res.json({ "Thông báo": "Đã cập nhật sp" });
  });
});
// http://localhost:4000/adminSP/:id_sp
router.delete("/:id_sp", function (req, res) {
  let id = req.params.id_sp;
  let sql = "DELETE FROM sanpham WHERE id_sp = ?";
  db.query(sql, id, (err, d) => {
    if (err) res.json({ "Thông báo": "Lỗi khi xóa sp", err });
    else res.json({ "Thông báo": "Đã xóa sp" });
  });
});
// http://localhost:4000/adminSP/themsp

router.post("/themsp", (req, res) => {
  let data = req.body;
  let sql = `INSERT INTO sanpham SET ?`;
  db.query(sql, data, function (err, result) {
    if (err) {
      console.error("Error inserting product:", err);
      res.status(500).json({
        success: false,
        message: "Thêm mới không thành công",
        error: err.message,
      });
    } else {
      console.log("Product inserted successfully. ID:", result.insertId);
      res.status(200).json({
        success: true,
        message: "Thêm sản phẩm thành công",
        insertedId: result.insertId,
      });
    }
  });
});
module.exports = router;
