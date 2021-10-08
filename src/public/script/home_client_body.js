
var product__list = []

var ProductApi = "http://localhost:3232/api/products"
CallApi(ProductApi)

async function CallApi(Api){
    await fetch(Api)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        // product__list = data
        data.map(item => {
            product__list.push(item)
        })
    })
    .then(function(product__list){
        RunScript()
    })
    .catch((err)=>{
        console.log(err);
    }) 
}


function RunScript() {
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

let CategoryList = $('.category__list')

let CartRemoveIcon = $('.cart-remove-icon')

//main arrgument
let NumberProductCart = 7;
let isLoggedIn = true;
$('.filter-btn-select-price').onclick = function (){
    console.log($('.select-filter-price-ul').classList)
    if($('.select-filter-price-ul').classList.contains('hidden')){
        $('.select-filter-price-ul').classList.remove('hidden')
        $('.select-filter-price-ul').classList.add('show')
    } else if($('.select-filter-price-ul').classList.contains('show')){
        $('.select-filter-price-ul').classList.remove('show')
        $('.select-filter-price-ul').classList.add('hidden')
    }
}

$('.select-filter-price-ul').onclick = function (e){
    if(e.target.closest('.item-li')){

        $('.sort-selected').style = "color: var(--primary-color); font-weight: 500;"
        $('.sort-selected').innerHTML = e.target.innerHTML
    }
}



var product_Filter = []

// SlideBarFuntion()
let translateX = 0;
function SlideNextFuntion(){ 
    let widthImg = $$('.slide-img')[0].width
    translateX -= widthImg
    if(translateX == -6*widthImg){
        translateX =0
    }
    $('.img-list-item').style = `transform: translateX(${translateX}px)`
    // clearInterval()
}

function SlidePrevFuntion(){ 
    let widthImg = $$('.slide-img')[0].width
    translateX += widthImg
    if(translateX == widthImg){
        translateX = -5*widthImg
    }
    $('.img-list-item').style = `transform: translateX(${translateX}px)`
    // console.log(translateX)
}

let npp = 15;
var curentPage =1;
let pageQuantity = Math.ceil(product_Filter.length/npp);

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

let t = {}

// Swap Func
function Swapp(a,b){
    console.log('SWAPPING...',a,b)
    // let t={}
    console.log('tttt',t)
    t = product__list[a]
    product__list[a] = product__list[b]
    product__list[b] = t
    console.log('SWAPed.',a,b)

}
let x=4
let y=5
Swapp(x,y)
console.log('x',x,'y',y)
// Filter_Category Funtion

function Filter_Category(category){

    product_Filter = []
    if(category === 'ALL'){
        product__list.forEach(function(item){
            product_Filter.push(item)
        })
    }
    else{
        product__list.forEach(function(item){
            if(item.cate === category){
                product_Filter.push(item)
            }
        })
    }
    curentPage=1
    $('.page__curent').innerHTML = curentPage
    InnerHTML(product_Filter)
}

// Fillter_F Function

function Filter_f(filter){
    product_Filter = []
    if(filter === 'sale-off'){       
        product__list.forEach(function(item){
            if(item.price_saleoff > 0 ){
                product_Filter.push(item)
            }
        })
    }
    if(filter === 'best-selling'){
        for(i=0 ; i < product__list.length ; i++)
            for(j=i+1 ; j< product__list.length ; j++)
                if(product__list[j].quantity > product__list[i].quantity)
                    Swapp(i, j)
                        
        for(item of product__list){
            product_Filter.push(item)
        }
    }

    if(filter === 'lastest'){
        for(i=0 ; i < product__list.length ; i++)
            for(j=i+1 ; j< product__list.length ; j++){
                if(product__list[j].id > product__list[i].id)                    Swapp(product__list[j], product__list[i])
                    Swapp(i, j)
                    
            }
        for(item of product__list){
            product_Filter.push(item)
        }
    }
    if(filter=== 'a-z'){
        for(i=0 ; i < product__list.length ; i++)
            for(j=i+1 ; j< product__list.length ; j++){
                console.log(product__list[j])
                if(product__list[j].name.toLocaleLowerCase().charCodeAt(0) <  product__list[i].name.toLocaleLowerCase().charCodeAt(0))
                    Swapp(i, j)
                    
            }
        for(item of product__list){
                product_Filter.push(item) 
        }
    }
    curentPage=1
    InnerHTML(product_Filter)
}
// Sort Price Funtion
function SortThis(arg){
    if(arg=='increase'){
        for(i=0 ; i < product__list.length ; i++)
            for(j=i+1 ; j< product__list.length ; j++)
                if(product__list[j].price_real < product__list[i].price_real)
                    Swapp(i, j)
                    
        product_Filter = []

        for(item of product__list){
            product_Filter.push(item)
        }
    }
    if(arg=='decrease'){
        for(i=0 ; i < product__list.length ; i++)
            for(j=i+1 ; j< product__list.length ; j++)
                if(product__list[j].price_real > product__list[i].price_real)
                    Swapp(i, j)
                    
        product_Filter = []
        for(item of product__list){
            product_Filter.push(item)
        }
    }
    curentPage=1
    InnerHTML(product_Filter)
}

$('.page-list').onclick = function(e){
    curentPage = e.target.innerHTML
    $('.page__curent').innerHTML = curentPage
    InnerHTML(product_Filter)
    $$('.page-item').forEach(function(pitem){
        if(pitem.classList.contains('btn-primary')){
            pitem.classList.remove('btn-primary')
        }
    })
    $$('.page-item')[curentPage-1].classList.add('btn-primary')
}

function Process(price){
    let n = price.toString().split('').reverse()
    let newstr = []
    for(i = 0 ; i < n.length ; i++){
        if( i!=0 && (i)%3===0 ){
            newstr.push('.',n[i])
        }
        else{
            newstr.push(n[i])
        }
    }
    n = newstr.reverse().join('')
    return n
}

// product__list.map(function(item){
//     item.price_real = Process(item.price_real)
//     item.price_origin = Process(item.price_origin)
// })




// InnerHTML Product Funtion
function InnerHTML(products){
        $('.product__item-ul').innerHTML =""
        pageQuantity = Math.ceil(products.length/npp)
        $('.page-list').innerHTML = '<li class="page-item item-li btn-primary">1</li>'
        for(ind=2 ; ind <= pageQuantity ; ind++){
            $('.page-list').innerHTML += `<li class="page-item item-li">${ind}</li>`
        }
        $('.page-sum').innerHTML = pageQuantity
        let sale_p = ''
        for(i=0 ; i< products.length ; i++){
            if((curentPage-1)*npp <= i && i < curentPage*npp){
                //
                if(products[i].sale_percent != 0)
                {
                    console.log('saleeee')
                    sale_p = `<div class="product__item-sale-percent show">${Math.floor(products[i].price_saleoff / products[i].price_origin *100)}% GIẢM</div>`
                }
                else    
                    products[i].price_origin = ''

                $('.product__item-ul').innerHTML += `<li class="product__item-li col l-2-4 m-3 c-6">
                    <div class="product__item-li-auth">
                        <a href="./cart.html" class="product__item-li-link">
                            <img src="${products[i].img}" alt="" class="product__item-img">
                            <div class="product__item-name title2">${products[i].name}</div>
                            <div class="product__item-price">
                                <span class="product__item-price--origin">${products[i].price_origin} </span>
                                <span class="product__item-price--saleoff">${products[i].price_origin-products[i].price_saleoff} đ</span>
                            </div>
                            <div class="product__item-addition" >
                                <i href="" class="far fa-heart"></i>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <span class="sold">Đã bán ${products[i].quantity}</span>
                            </div>
                            <div class="product__item-address">Ha Noi</div>
                        </a>
                        <div class="product__item-like">Yêu thích</div>
                        ${sale_p}
                    </div>
                </li>`
   
            }
        }
}
$('.page__btn-next').onclick = function() {
    if(curentPage >= pageQuantity){
        curentPage = 1
    }
    else{
        curentPage++
    }
    $('.page__curent').innerHTML = curentPage
    $$('.page-item').forEach(function(pitem){
        if(pitem.classList.contains('btn-primary')){

            pitem.classList.remove('btn-primary')
            console.log(pitem.classList)
            // documentLoaded()
        }
    })
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
    
    Filter_Category('ALL')

    for(i=0; i< NumberProductCart ; i++ ) {
        $('.cart-list-ul').innerHTML += `<li class="cart-list-li" id="cartitem-1">
        <img src="./img/cartlist-item-0.png" alt="" class="header__cart product-img">
        <div class="product-name title2">
            <span class="product-name title2">Product Name 1: không năm không bao gồm bất cứ thứ gì em cần</span>
        </div>
        <div class="product-price">
            <span class="price">1.990 $</span>
        </div>
         <i class="fas fa-times"></i>
        </li>`
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

    setInterval(SlideNextFuntion,5000)
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

CategoryList.onclick = function(e) {
    if(e.target.closest('.category__item')){
        $$('.category__item').forEach(function(thisItem){
            thisItem.style = "color: black ; font-size: 100%;"
            if($('.fa-caret-right'))
                $('.fa-caret-right').remove()
        })
        e.target.children[0].innerHTML = `<i class="fas fa-caret-right"></i>`
        e.target.style = 'color: var(--primary-color); font-size: 105%;'
    }
}

// $$ chọn các phần tử con (.btn) của phần tử cha (.product__filter-f)
let FilterZone =  $('.product__filter-f')
let ChainOf_FilterBtn = $$('.product__filter-f > .btn')

FilterZone.onclick = function(e){
    if(e.target.closest('.btn')){
        ChainOf_FilterBtn.forEach(function(item){
            if(item.classList.contains('btn-primary'))
                item.classList.remove('btn-primary')
        })
        e.target.classList.add('btn-primary')
    }
}

let HeartBtn  = $('.product__item-ul')
HeartBtn.onmousedown = (function(e){
    console.log(e.target)
    if(e.target.classList.contains('fa-heart')){
        console.log('DSFFSFSFS')
        e.target.onclick = function(e1){ 
            //e1.stopPropagation()
            e1.preventDefault()
        }
    }
    if(e.target.classList.contains('far','fa-heart')){
        e.target.classList.remove('fa-heart','far')
        console.log(e.target.classList)
        e.target.classList.add('fas','fa-heart')
        e.target.style = "color: #f53d2f;"
    }
    else if(e.target.classList.contains('fas','fa-heart')){
        e.target.classList.remove('fa-heart','fas')
        console.log(e.target.classList)
        e.target.classList.add('far','fa-heart')
        e.target.style = "color: #111;"
    }
})
// Responsive Event


$('.header__navbar-hider').onclick= function(){
    // this.style = "display: none;"
    $('.header').classList.add('mode-m-t')
    $('.header__navbar').classList.add('mode-m-t')
    $('.header__navbar-list').classList.add('mode-m-t')
    $('.header__search-panel').classList.add('mode-m-t')
}
$('.header__navbar-item-close-navbar').onclick= function(){
    $('.header').classList.remove('mode-m-t')
    $('.header__navbar').classList.remove('mode-m-t')
    $('.header__navbar-list').classList.remove('mode-m-t')
    $('.header__search-panel').classList.remove('mode-m-t')
}
$('.category__hider').onclick = function(){
    $('.category__auth').style = "display: flex;"
}
$('.category-mobile-ul').onclick= function(e){
    if(e.target.closest('.category-mobile-li')){
        
        $$('.category-mobile-li').forEach(function(ele){
            console.log(ele)
            if(ele.classList.contains('btn-primary'))
                ele.classList.remove('btn-primary')
        })
        e.target.classList.add('btn-primary')
    }
    
}
let n = false;
$('.select-item').onclick= function(){   
    if(n){     
        $('.select-ul').style = "display: none;"
        n= false;
    }
    else{
        $('.select-ul').style = "display: block;"
        n= true;
    }    
}
}

// setTimeout(RunScript(),11)

