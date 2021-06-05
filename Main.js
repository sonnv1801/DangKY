function submit() {
    var user = document.getElementById("username").value;
    var Phone = document.getElementById("Phone").value;
    var Email = document.getElementById("Email").value;
    var passWord = document.getElementById("passWord").value;
    var passWordR = document.getElementById("passWordR").value;
    var email = document.getElementById('Email');
    var phone = document.getElementById('Phone');
    var password = document.getElementById('passWord');
    var box = document.getElementById("action");

    
       
     if(user == "" || passWord == ""|| passWordR == "" || Phone == "" || Email== "" ){
                    alert('Vui lòng nhập đầy đủ thông tin!');
                return ;
                    } 
        else{

                if(user.length<4){
                    alert("Tên Của Bạn Không Đúng\n Ví dụ: Văn Sơn")
                return;
                    }
        
        else{
                if (isNaN(Phone)){
                    alert("Bạn không được nhập chữ và kí tự!")
                return;
                    }

        else{

            var phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                if(!phoneNumber.test(phone.value)){
                    alert('Số điện thoại không hợp lệ')
                 return ;
                    }

        else{

            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{3,4})+$/;
            if (!filter.test(email.value)) {
                alert('Địa chỉ Email không hợp lệ\n ví dụ: Vanson123@gmail.com');
                email.focus;
             return false;
                    }

        else{

            var pass = /^[A-Za-z]\w{7,14}$/;
                if(!pass.test(password.value)){
                    alert('Mật khẩu không hợp lệ');
                return ;
                    }

        else{
                if(passWord != passWordR){
                    alert("Mật khẩu không trùng khớp")
                    return;
                    }else{
                        if(box.checked){
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
        }else{
            alert("Vui lòng đồng ý điều khoản! ")
                    return;
                        }
                    }

                }
            }
        }
    }    
}  
}
}

function checkUsername(){
    var yourUser = document.getElementById("username").value;
    var thisyourUser = /^[a-zA-Z0-9_-]{3,16}$/ ;
    
    if(yourUser.match(thisyourUser)){
        document.getElementById("username").style.borderColor = "#05ad23"
    }else{
      document.getElementById("username").style.borderColor = "#ff0505"
    }
    if(username == ""){
       document.getElementById("username").style.borderColor = "#ff0505"
    }
 }
 
function CheckPhone(){
    var Phone = document.getElementById('Phone').value;
    var yourPhoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/
    if(Phone.match(yourPhoneNumber)){
        document.getElementById('Phone').style.borderColor = "#05ad23";
    }else{
        document.getElementById('Phone').style.borderColor = "#ff0505";
    }
    if(Phone == ""){
      document.getElementById('Phone').style.borderColor = "#ff0505";
    }
}

function checkEmail(){
   var email = document.getElementById("Email").value;
   var yourEmail =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,3})+$/;

   if(email.match(yourEmail)){
       document.getElementById("Email").style.borderColor = "#05ad23"
   }else{
     document.getElementById("Email").style.borderColor = "#ff0505"
   }
   if(Email== ""){
      document.getElementById("Email").style.borderColor = "#ff0505"
   }
}

function password(){
   var password = document.getElementById("passWord").value;
   var yourPassword =/^[A-Za-z]\w{7,14}$/;

   if(password.match(yourPassword)){
       document.getElementById("passWord").style.borderColor = "#05ad23"
   }else{
     document.getElementById("passWord").style.borderColor = "#ff0505"
   }
   if(Email== ""){
      document.getElementById("passWord").style.borderColor = "#ff0505"
   }
}


function checkPassword(){
    var yourCheck = document.getElementById("passWordR").value;
    var yourPassword =/^[A-Za-z]\w{7,14}$/;
    
    if(yourCheck.match(yourPassword)){
        document.getElementById("passWordR").style.borderColor = "#05ad23"
    }else{
      document.getElementById("passWordR").style.borderColor = "#ff0505"
    }
    if(passWordR == ""){
       document.getElementById("passWordR").style.borderColor = "#ff0505"
    }
 }