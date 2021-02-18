import { ProxyState } from "../AppState.js"
import { productServices } from "../Services/ProductServices.js"

function _draw(){
    let products = ProxyState.products
    let template = ""
    products.forEach(product => template += product.Template)
    document.getElementById('products').innerHTML = template
    console.log(ProxyState.products)
}

export default class ProductController{
    constructor(){
        console.log("Hello from product controller!")
        ProxyState.on("products",_draw)
        _draw()
    }

    createProduct(event){
        event.preventDefault()
        let form = event.target
        let rawProduct = {
            product: form.product.value,
            imgUrl: form.imgUrl.value,
            description: form.description.value,
            price: parseFloat(form.price.value)
        }
        productServices.createProduct(rawProduct)
    }

    buyProduct(id){
        productServices.buyProduct(id)
    }

    deleteProduct(id){
        productServices.deleteProduct(id)
    }
}