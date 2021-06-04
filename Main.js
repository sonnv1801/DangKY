function submit() {
    var user = document.getElementById("username").value;
    var Phone = document.getElementById("Phone").value;
    var Email = document.getElementById("Email").value;
    var passWord = document.getElementById("passWord").value;
    var passWordR = document.getElementById("passWordR").value;
   
    if(user == "" || passWord == ""|| passWordR == "" || Phone == "" || Email== "" ){
        alert('HÃY NHẬP ĐẦY ĐỦ THÔNG TIN');
        return ;
    }

    if(isNaN(Phone)){
        alert("Phải là số")
        return;
    }
    if(Phone.length<9){
        alert("Số Điện Thoại Không Đúng")
        return;
    }
    if(passWord.length<6){
        alert("Mật Khẩu Có ít Nhất 6 Ký Tự")
        return;
    }

    if(passWord != passWordR){
        alert("Mật Khẩu Không Trùng Khớp")
        return;
    }
  
    var submit = confirm('XÁC NHẬN THÔNG TIN CỦA BẠN\n'
    +'Tên: '+user+"\n"
    + 'Số Điện Thoại: '+Phone+"\n"
    +'Gmail: '+Email+"\n"
    +'Mật Khẩu: '+passWord+"\n"
    +'Xác nhận Mật Khẩu: '+passWordR)
    if(submit == 1){
        alert('ĐĂNG KÍ THÀNH CÔNG')
    }else{
        alert('Nhập Lại Thông Tin')
    }
    
    }

