const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Selectors
let NoProductCart = $('.empty-cart-img')
let SearchBtn = $('.header__searchbar-goto')

let CartList = $('.cart-list')
let CartRemoveItem = $('#cartitem3 > .cart-remove-item')
let BtnViewCart = $('.viewcart-btn')
let CartNotify = $('.cart-notify')
let btnLogIn = $('.login-btn')
let btnReg = $('.reg-btn')
let UserAccount = $('.user-account')
let LogOutBtn = $('.logout-btn')


let CartRemoveIcon = $('.cart-remove-icon')




//main arrgument
let NumberProductCart = 7;
let isLoggedIn = false;

// Main Function

// Highlight Item-li On List-ul


// Seacrch Goto Function
$('.header__searchbar-goto').onclick = function(){
    let keyword = $('.header__searchbar-inp').value
    $('.search-result-inp').innerHTML = keyword
    let process_keyword = keyword.toLocaleLowerCase().replace(/ /g, "")
    // Replace keyword
    let newkeyword=''
        // let replace_key = ['ip','ss']
        // if(process_keyword.includes('ip'))
        //     newkeyword = process_keyword.replace('ip', 'iphone')
        if(process_keyword.includes('ss'))
            newkeyword = process_keyword.replace('ss','samsung')
        else{
            newkeyword = process_keyword
        }
    // 
    console.log(newkeyword)
    product_Filter = []
    product__list.forEach(function(item){
        let process_item = item.name.toLowerCase().replace(/\s/g, "")
        if(process_item.includes(newkeyword))
        product_Filter.push(item)       
    })
    curentPage=1
    InnerHTML(product_Filter)
}




function documentLoaded(){
    if(NumberProductCart>0){
        NoProductCart.style = "display: none"
        CartNotify.innerHTML = `${NumberProductCart}`
    }
    else{
        NoProductCart.style = "display: block"
        $('.cart-list-ul').style = "display: none"
        $('.header__cart.viewcart').style = "display: none"
        $(".cart-list-header").style= "display: none"
    }
    if(isLoggedIn){
        btnReg.style = "display:none"
        btnLogIn.style = "display: none"
        UserAccount.style ="display: block"
    }
    else{
        btnReg.style = "display: block"
        btnLogIn.style = "display: block"
        UserAccount.style ="display: none"
    }
    
    
    $$('.page__btn-next').forEach(function(item){
        item.onclick = function(){
            if(curentPage >= pageQuantity){
                curentPage = 1
            }
            else{
                curentPage++
            }
            $('.page__curent').innerHTML = curentPage
            InnerHTML(product_Filter)
            $$('.page-item.item-li').forEach(function(pitem){
                if(pitem.classList.contains('btn-primary')){
                    pitem.classList.remove('btn-primary')
                }
            })
            $$('.page-item')[curentPage-1].classList.add('btn-primary')
        }
    })

    $$('.page__btn-prev').forEach(function(item){
        item.onclick = function(){
            if(curentPage <=1){
                curentPage = pageQuantity
            }
            else{
                curentPage--
            }
            $('.page__curent').innerHTML = curentPage
            InnerHTML(product_Filter)
            $$('.page-item').forEach(function(pitem){
                if(pitem.classList.contains('btn-primary')){
                    pitem.classList.remove('btn-primary')
                }
            })
            $$('.page-item')[curentPage-1].classList.add('btn-primary')          
        }
    })

    // setInterval(SlideNextFuntion,5000)
}


documentLoaded()

btnReg.onclick = function() {
    $('.modal').style="display: flex;"
    $('.reg-form').style= "display: block;"
}

btnLogIn.onclick = function() {
    $('.modal').style="display: flex;"
    $('.login-form').style= "display: block;"
}

let btn_SwitchForm_LogIn_Reg  = $('.auth-form__switch-btn')
btn_SwitchForm_LogIn_Reg.onclick = function() {
    if(this.classList.contains('switch-reg')){
        $('.login-form').style = "display: none;"
        $('.reg-form').style= "display: block;"
    }
    if(this.classList.contains('switch-log')){
        $('.reg-form').style = "display: none;"
        $('.login-form').style= "display: block;"
    }
    
}

let btn_SwitchForm_LogInnn  = $('.auth-form__switch-btn.switch-reg')
btn_SwitchForm_LogInnn.onclick = function() {
        console.log('fafa')
        $('.login-form').style = "display: none;"
        $('.reg-form').style= "display: block;"
    
}

let Modal = $('.modal')
let RegForm = $('.reg-form')
let LoginForm = $('.login-form')
let backLogBtn = $('.back-btn.log-form-child')
let backRegBtn = $('.back-btn.reg-form-child')
let Header_Select_Btn = $('.select-item')
let Header_Select_List = $('.select-ul')

backLogBtn.onclick = function() {
    LoginForm.style="display: none"
    Modal.style="display: none"
}

backRegBtn.onclick = function() {
    RegForm.style="display: none"
    Modal.style="display: none"
}

// Event Function

// Onclick Function
LogOutBtn.onclick = function(){
    console.log("ahsbdua")
    isLoggedIn = false;
    documentLoaded()
}

CartList.onclick = function(e) {
    if(e.target.closest('.fa-times')){
        console.log(e.target.parentNode)
        //e.target.parentNode.style= " animation: sileUpFaded linear 0.5s;"
        e.target.parentNode.remove()
        NumberProductCart--
        CartNotify.innerHTML = NumberProductCart
        
        if(NumberProductCart==0){
            CartNotify.style = "display: none"
            documentLoaded()
        }
        
    }
    
}


// $$ chọn các phần tử con (.btn) của phần tử cha (.product__filter-f)



// Responsive Event


// $('.header__navbar-hider').onclick= function(){
//     // this.style = "display: none;"
//     $('.header').classList.add('mode-m-t')
//     $('.header__navbar').classList.add('mode-m-t')
//     $('.header__navbar-list').classList.add('mode-m-t')
//     $('.header__search-panel').classList.add('mode-m-t')
// }
// $('.header__navbar-item-close-navbar').onclick= function(){
//     $('.header').classList.remove('mode-m-t')
//     $('.header__navbar').classList.remove('mode-m-t')
//     $('.header__navbar-list').classList.remove('mode-m-t')
//     $('.header__search-panel').classList.remove('mode-m-t')
// }
// $('.category__hider').onclick = function(){
//     $('.category__auth').style = "display: flex;"
// }
// $('.category-mobile-ul').onclick= function(e){
//     if(e.target.closest('.category-mobile-li')){
        
//         $$('.category-mobile-li').forEach(function(ele){
//             console.log(ele)
//             if(ele.classList.contains('btn-primary'))
//                 ele.classList.remove('btn-primary')
//         })
//         e.target.classList.add('btn-primary')
//     }
    
// }
// let n = false;
// $('.select-item').onclick= function(){   
//     if(n){     
//         $('.select-ul').style = "display: none;"
//         n= false;
//     }
//     else{
//         $('.select-ul').style = "display: block;"
//         n= true;
//     }    
// }
