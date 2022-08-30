var express = require("express");
var app = express();

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

// khai bao server
var server = require("http").Server(app);
// khai bao thu hien socket io va cau hinh server
var io = require("socket.io")(server);
server.listen(3000);

var arrHocVien = [];

io.on("connection", function(socket){
    socket.on("hoc-vien-gui-thong-tin", function(data){
        arrHocVien.push(new HocVien(data.hoten, data.email, data.sodienthoai));
        io.sockets.emit("server-gui-danh-sach", arrHocVien);
    });
});

//khai bao lop quan tri doi tuong hoc vien
function HocVien(hoTen, email, soDienThoai){
    this.hoTen = hoTen;
    this.email = email;
    this.soDienThoai = soDienThoai;
}

app.get("/", function(req, res){
    res.render("trangchu");
})