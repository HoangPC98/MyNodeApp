
const $3 = document.querySelector.bind(document)
const $$3 = document.querySelectorAll.bind(document)

const InputUser = $3('.user')
const Inputpasssword = $3('.auth-form__input.passs')
const InputpasssConfirm = $3('.passs-confirm')
// const MessageValid = $3(type).parentElement.querySelector('.validate-message')
const Messagepasssword = Inputpasssword.parentElement.querySelector('.validate-message')
const MessageUser = InputUser.parentElement.querySelector('.validate-message')
const AllMessage = $$3('.validate-message')

let Characters = 0;
let UpperCase = 0;
let LowerCase = 0;
let Numbers = 0;
let IsValid = false;

let isValid = false;
let isValid_User = false;
let isValid_Pass = false;
let isValid_PassConfirm = false;

function CheckAll(type){
    let Characters = 0;
    let UpperCase = 0;
    let LowerCase = 0;
    let Numbers =0;
    let userName = ''
    let password = ''

    MessageValidate = $3(type).parentElement.querySelector('.validate-message')
    for(i=0; i < $3(type).value.length; i++){
        if($3(type).value.charCodeAt(i) >=65 && $3(type).value.charCodeAt(i) <=90) {
            UpperCase +=1
         }
         else if($3(type).value.charCodeAt(i) >=97 && $3(type).value.charCodeAt(i) <=122){
             LowerCase +=1
         }
         else if($3(type).value.charCodeAt(i) >=48 && $3(type).value.charCodeAt(i) <=57){
             Numbers +=1
         }
         else{
             Characters +=1
         }
    }
    if(type === '.passs'){
        console.log('PASSSSSS',MessageValidate)
        console.log(UpperCase, LowerCase, Numbers);
        passWord = $3(type).value
        if($3(type).value.trim()===''){
            MessageValidate.innerHTML = '* Không được bỏ trống trường này'
            MessageValidate.style = 'color: red;'
            isValid_Pass = false
        }
        else if($3(type).value.length >=10 && UpperCase>=1 && LowerCase>=1 && Numbers>=1){
            MessageValidate.innerHTML = 'Hợp lệ'
            MessageValidate.style = 'color: green;'
            console.log(passWord)
            isValid_Pass = true
        }
        else{
            MessageValidate.innerHTML = 'Mật khẩu phải chứa ít nhất 10 kí tự,bao gồm ít nhất 1 kí thường, 1 kí tự in hoa và chữ số'
            MessageValidate.style = 'color: red;'
            isValid_Pass = false
        }
    }
    
    if(type=='.user'){
        console.log('USERRRR',MessageValidate)
        if(InputUser.value.trim()===''){
            MessageValidate.innerHTML = '* Không được bỏ trống trường này'
            MessageValidate.style = 'color: red;'
            isValid_User = false
        }
        else if(InputUser.value.length >=8 && Characters==0){
            MessageValidate.innerText = 'Hợp lệ'
            MessageValidate.style = 'color: green;'
            isValid_User = true
        }
        else{
            MessageValidate.innerText = 'Tên phải chứa ít nhất 8 kí tự và không chứa kí tự đặc biệt'
            MessageValidate.style = 'color: red;'
            isValid_User = false
        }
    }

    if(type == '.passs-confirm'){
        console.log(type)
        if($3(type).value === passWord) {
            MessageValidate.innerHTML = 'Khớp'
            MessageValidate.style = 'color: green;'
            isValid_PassConfirm =true
        }
        else{
            MessageValidate.innerHTML = 'Không khớp'
            MessageValidate.style = 'color: red;'
            isValid_PassConfirm =false
        }
    }
    console.log(isValid_User, isValid_Pass, isValid_PassConfirm)
    if(isValid_User==true && isValid_Pass==true && isValid_PassConfirm==true)
        isValid = true
    else
        isValid = false
}

$3('.btn.submit-btn.reg-form-child').onclick = function(){
    console.log(isValid)
    if(isValid==true){
        alert('Đăng kí thành công')
        $3('.reg-form').style = 'display: none;'
        $3('.modal').style = 'display: none;'
        location.reload()
    }
    else{
        alert('Đăng kí không thành công,vui lòng kiểm tra lại thông tin')
    }
    // document.getElementById('reg-formm').method = 'post';
    document.getElementById('reg-form').submit()
}

let UserName =''
CheckLogIn = function(){
    console.log('DDax bam')
    UserName = $3('.input-login.user').value
    if($3('.input-login.pass').value =='Admin123456'){
        $3('.user-name').innerHTML = UserName
        isLoggedIn = true;
        alert('Đăng nhập thành công')
        $3('.login-form').style = 'display: none;'
        $3('.modal').style = 'display: none;'
        documentLoaded()
    }
    else{
        alert('Đăng nhập thất bại, vui lòng kiểm tra lại thông tin')
    }
}








