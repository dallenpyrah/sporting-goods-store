import { ProxyState } from "../AppState.js"
import Product from "../Models/Product.js"

export function saveState() {
    localStorage.setItem('darrylsGoods', JSON.stringify({
        pizzas: ProxyState.products
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem(''))
    if (data) {
        ProxyState.products = data.products.map(coldProducts => new Product(coldProducts))
    }
}