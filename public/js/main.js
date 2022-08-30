var socket = io("http://localhost:3000");

socket.on("server-gui-danh-sach", function(data){
    $("#ds").html("");
    data.forEach(function(hocvien, key){
        $("#ds").append(
            `<div class='hocvien'>
                <div class='hang1'>id: ` + (key + 1) + ` || <span>` + hocvien.hoTen + `</span></div>
                <div class='hang2'>` + hocvien.email + ` - ` + hocvien.soDienThoai + `</span></div>
            </div>`
        )
    });
});

$(document).ready(function(){
    $("#btnDangKy").click(function(){
        socket.emit("hoc-vien-gui-thong-tin",{
            "hoten": $("#txtHoaTen").val(),
            "email": $("#txtEmail").val(),
            "sodienthoai": $("#txtSoDienThoai").val()
        });
    });
});