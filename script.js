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
    spl = /[\w\s]/.test(s);
    sl = /[a-z]/.test(s);
    cl=/[A-Z]/.test(s);
    len = s.length>=8 && s.length<=20;
    return dig && spl && sl && cl && len;
}

document.getElementById("submit").addEventListener("click",function(e){
    var userid= document.getElementById("Userid");
    var userVal= document.getElementById("UseridInvalid");
    var password = document.getElementById("password");
    var passwordVal = document.getElementById("passwordInvalid");
    var passwordVal1 = document.getElementById("passwordInvalid1");
    
    for(let i of userid.value){
        if(isUserId(i)){
            userVal.textContent="";
        }
        else{ userVal.textContent="Userid can only contain alphanumeric chracters and '_'";
        break;}
    }
    
    if(password.value!=''){
        if(isPassword(password.value)){
            passwordVal.textContent="";
            passwordVal1.textContent="";
        }
        else if(!(password.value.length>=8 && password.value.length<=20)){
            passwordVal.textContent="password length should be between 8 to 20 chracter";
            passwordVal1.textContent="";
        }
        else {passwordVal.textContent="password should contain atleast one spl character";
            passwordVal1.textContent=" ,upper case and lower case letter"
    
        }
    }
    

})