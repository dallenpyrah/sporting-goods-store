import { generateId } from "../Utils/GenerateId.js"


export default class Product{
    constructor({product, imgUrl, description, price, id = generateId(), quantity = 100}){
        this.product = product,
        this.imgUrl = imgUrl,
        this.description = description,
        this.price = price,
        this.id = id,
        this.quantity = quantity
    }

    get Template(){
        return /*html*/ `
         <div class="col-3 text-center card m-2">
                            <h1>${this.product}</h1>
                            <img class="card-img-top" src="${this.imgUrl}" alt="">
                            <h6>Description:</h6>
                            <p class="text-left ml-2">${this.description}</p>
                            <h6 class="mb-4">Price: <span>${this.price}</span></h6>
                            <h6 class="mb-4">Quantity: <span>${this.quantity}</span></h6>
                            <button class="btn btn-success btn-md"  onclick="app.productController.buyProduct('${this.id}')">Add</button>
                            <button class="btn btn-danger btn-md mt-2" onclick="app.productController.deleteProduct('${this.id}')">Delete</button>
                            <p></p>
                    </div>
                    
        `
    }

}