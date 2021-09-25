
var ProductApi = "http://localhost:3002/api/products"
fetch(ProductApi)
    .then(response => response.json())
    .then(data => {
        product__list = data
        console.log(product__list)
    })
    .catch(err=>{
        response.send(err);
    }) 




