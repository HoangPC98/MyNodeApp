
// let category = ['iPhone','SAMSUNG', 'OPPO','Vsmart','Xiaomi','Realme']
// let name_ip = ['8 Plus', 'SE 2', 'XR', 'XS Max','11','11 Pro Max','12 Mini', '12 Pro', '12 Pro Max']
// let name_ss = ['S21','S20 Ultra','S21 Ultra','Note20 Ultra', 'Z Flip','Z Fold 3']
// let name_op = ['Reno 4', 'Reno 5','Reno 6', 'A74', 'A94', 'A54', 'Find X3 Pro']
// let name_vi = ['Aris','Star 4', 'Joy 4', 'Active 3']
// let name_mi = ['Mi 11','Mi 11 Ultra','Mi 11 Lite', 'Mi 10 Pro', 'Mi 10T']
// let name_re = ['8 Pro','6 Pro','7 Pro','7i']
// let name_all =[name_ip, name_ss, name_op, name_vi, name_mi, name_re]
// console.log(name_all)
// let rangeOf_price_o = [29990000, 27990000, 27490000, 24490000, 22990000, 19990000, 17490000, 14490000]
// let rangeOf_price_s = [0, 0,800000, 0, 0, 1200000, 0,  2500000, 0,  3000000, 4500000, 0]

// let index = 0
// let product__list = []

// for(i=0; i< name_all.length ; i++){
//     for(j=0 ; j< name_all[i].length ; j++){
//         index++
//         catego = category[i]
//         if(category[i]==='SAMSUNG')
//             catego += ' Galaxy'
//         let price_o = rangeOf_price_o[Math.floor(Math.random()*(rangeOf_price_o.length-1))]
//         let price_s = rangeOf_price_s[Math.floor(Math.random()*(rangeOf_price_s.length-1))]
//         let price_r = price_o - price_s
//         let sale_per = Math.round(price_s/price_o*100)
//         product__list.push(
//             {
//                 id: index,
//                 name: catego + ' ' + name_all[i][j],
//                 quantity: Math.floor(Math.random()*299),
//                 cate: category[i],
//                 img: `./img/product-list-img/${name_all[i][j]}.png`,
//                 price_origin: price_o,
//                 price_saleoff: price_s,
//                 price_real: price_r,
//                 sale_percent : sale_per,
//             }
//         )
//         console.log(product__list)
//     }
// }


    
// let response = await fetch(ProductApi);
// let user = await response.json();
// async function CallApi(){
//     let response = await fetch(ProductApi);
//     product__list = await response.json();
// }

// CallApi()

// var request = new XMLHttpRequest()

// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)

//     if(request.status >= 200 && request.status < 400) {
//         product__list = data
//         console.log(product__list)
//     }
//     else {
//     console.log('error')
//   }
// }   
// request.send()

