import { ProxyState } from "../AppState.js"
import Product from "../Models/Product.js"
import { saveState } from "../Utils/LocalStorage.js"


class ProductServices{
    constructor(){
        console.log("Hello from product services!")
        ProxyState.on('products',saveState)
    }

    createProduct(rawProduct){
        let temp = ProxyState.products
        temp.push(new Product(rawProduct))
        ProxyState.products = temp
    }

    buyProduct(id){
        let temp = ProxyState.products
        let product = temp.find(product => product.id === id)
        product.quantity -= 1
        ProxyState.totalProducts.push(product)
        console.log(ProxyState.totalProducts,"this is total products")
        ProxyState.products = temp

    }

    deleteProduct(id){
        let temp = ProxyState.products
        let productIndex = temp.findIndex(product => product.id === id)
        temp.splice(productIndex, 1)
        ProxyState.products = temp

        let totalTemp = ProxyState.totalProducts
        let totalProductIndex = totalTemp.findIndex(product => product.id === id)
        totalTemp.splice(totalProductIndex, 1)
        ProxyState.totalProducts = totalTemp
    }

    deleteTotalProducts(id){
        let totalTemp = ProxyState.totalProducts
        let totalProductIndex = totalTemp.findIndex(product => product.id === id)
        totalTemp.splice(totalProductIndex, 1)
        ProxyState.totalProducts = totalTemp
    }

    removeProduct(id){
        let totalTemp = ProxyState.totalProducts
        let totalProduct = totalTemp.find(product => product.id === id)
        totalProduct.quantity -= 1
        ProxyState.totalProducts.push(totalProduct)
        console.log(ProxyState.totalProducts,"this is total products")
        ProxyState.totalProducts = totalTemp

    }
}

export const productServices = new ProductServices()