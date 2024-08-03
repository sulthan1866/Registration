document.getElementById("showPass").addEventListener('click',function(e){
    
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      
})

function createotp(){
    digits='0123456789';
        otpNo='';
        for (let i = 0; i < 4; i++) {
            otpNo+=digits[Math.floor(Math.random()*10)];
            
        }
}

function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

function isDigit(char) {
    return /^\d$/.test(char);
}

function isSpecial(char) {
    return /[^\w\s]/.test(char);
}

function isUserId(s){
    dig=isDigit(s);
    l=isLetter(s);
    und = /_/.test(s);
    return dig || l || und;
    
}

function isPassword(s){
    dig =/\d/.test(s);
    spl = /[!@#$%^&*()?_]/.test(s);
    sl = /[a-z]/.test(s);
    cl=/[A-Z]/.test(s);
    len = s.length>=8 && s.length<=20;
    return dig && spl && sl && cl && len;
}

function isMail(s){
    return /[a-zA-Z0-9]+@gmail+\.+com/.test(s);
}

function isPnone(s){
    return /^[6-9]\d{9}$/.test(s);
}

createotp();
document.getElementById("submit").addEventListener("click",function(e){
    var userid= document.getElementById("Userid");
    var userVal= document.getElementById("UseridInvalid");
    var password = document.getElementById("password");
    var passwordVal = document.getElementById("passwordInvalid");
    var passwordVal1 = document.getElementById("passwordInvalid1");
    var confirm = document.getElementById("Confirm");
    var confirmVal = document.getElementById("ConfirmInvalid");
    var email = document.getElementById('Email');
    var emailVal = document.getElementById('EmailInvalid');
    var phoneNo =document.getElementById("Phone");
    var PhoneVal  =document.getElementById("PhoneInvalid");
    var otp = document.getElementById('otp');
    var otpVal = document.getElementById('OTPInvalid');
    
//check user id
    if(userid.value!=''){
            for(let i of userid.value){
            if(isUserId(i)){
                userVal.textContent="";
            }
            else{ userVal.textContent="Userid can only contain alphanumeric chracters and '_'";
                e.preventDefault();
                userid.focus();
            break;}
        }
    }
    
    //check password
    if(password.value!=''){
        if(isPassword(password.value)){
            passwordVal.textContent="";
            passwordVal1.textContent="";
        }
        else if(!(password.value.length>=8 && password.value.length<=20)){
            passwordVal.textContent="password length should be between 8 to 20 chracter";
            passwordVal1.textContent="";
            e.preventDefault();
            password.focus();
        }
        else {passwordVal.textContent="password should contain atleast one spl character,";
            passwordVal1.textContent="upper and lower case letter and number"
            e.preventDefault();
            password.focus();
    
        }
    }

    //check confirm password
    if(confirm.value!=''){
        if(password.value==confirm.value){
            confirmVal.textContent='';
        }else{
            confirmVal.textContent='Input is not matching with password';
            e.preventDefault();
            confirm.focus();
        }
    }
    
    //check e-mail
    if(email.value!=''){
        if(isMail(email.value)){
            emailVal.textContent='';
        }
        else{
            e.preventDefault();
            email.focus()
            emailVal.textContent='Enter Valid E-mail';

        }
    }

    //check phone no

    if(phoneNo.value!=''){
        if(isPnone(phoneNo.value)){
            PhoneVal.textContent="";
            otp.removeAttribute('disabled');
            document.getElementById('otpTop').className='text-light d-flex justify-content-center'
            otpVal.textContent='Hint: '+otpNo
        }
        else {PhoneVal.textContent="Enter a valid phone number";
            
            e.preventDefault();
            phoneNo.focus();
    
        }
    }
    // check otp
    if(otp.value!=''){
        if(otp.value==otpNo){
            otpVal.textContent='';
            
        }else{
            document.getElementById('otpTop').className='text-danger d-flex justify-content-center'
            otpVal.textContent='Wrong OTP(Hint: '+otpNo+')';
            e.preventDefault();
            otp.focus();
        }
        
    }
    

})
