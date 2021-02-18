import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Product from "./Models/Product.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  /** @type {Product[]} */

  products = [new Product({product: "Skateboard", imgUrl: "https://longboardbrand.com/wp-content/uploads/2017/12/POSITIV-Team-Complete-Skateboards.jpg", description: "This is a nice skateboard", price: 100, quantity: 100})]

  /**@type {Product[]} */

  totalProducts = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
