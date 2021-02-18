import ProductController from "./Controllers/ProductController.js";
import ValuesController from "./Controllers/ValuesController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  // valuesController = new ValuesController();

  productController = new ProductController();
}

window["app"] = new App();
loadState();
