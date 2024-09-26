// yeu cau module express
const express = require("express");
//tao mot ung dung express
const app = express();
// thiet lap cong
const port = 3000;
// midd de phan tich du lieu tu  request
app.use(express.urlencoded({ extended: true }));
//middleware de phan tich du lieu JSON tu body cua yeu cau
//Dieu nay cho pheps express hieu va xu ly du lieu JSoN tu request
app.use(express.json());
//middleware de phuc vu file tinh nhu HTML, CSS, JS tu thu muc
app.use(express.static("public"));
//midd de phan tich du lieu tu from
app.use(express.urlencoded({ extended: true}));
//dinh nghia route chinh tra ve trang chao mung khi dung truy cap
app.get("/check", (req, res) => {
    res.send("CHÀO MỪNG ĐẾN VỚI WEB");
});
//Route POST nhan du lieu tu client va tra ve phan hoi
//Khi client gui du lieu den dia chi `/submit` voi phuong thuc
app.post("/submit", (req, res) => {
    // lay thuoc tinh name tu body cua request
    const { name } = req.body;
    //neu name ton tai tra ve phan hoi chao mung ban den voi web
    if(name) {
        res.json({ message: `Chào mừng ${name}! `});
    } else{
        //neu name k ton tai tra ve phan hoi loi
        res.status(400).json({ message: "Vui lòng nhập thôn tin"})
    }
});
app.listen(port, () => {
    console.log(`Đang chạy tại cổng http://localhost:${port}`);
});