class ProductManager {
    constructor() {
      this.products = [];
      this.productId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar que todos los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error('Todos los campos son obligatorios');
        return;
      }
  
      // Validar que el código no esté repetido
      const codeExists = this.products.find(product => product.code === code);
      if (codeExists) { return "El producto con code ($code"
      }
  
      const newProduct = {
        id: this.productId,
        title,
       description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      this.productId++; // Incrementar el ID para el próximo producto
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (product) {
        return product;
      } else {
        console.error('Producto no encontrado');
      }
    }
  }
  
  
  const productManager = new ProductManager();
  console.log(productManager.getProducts());

  productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
  console.log(productManager.getProducts());
  
  
  productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
  console.log(productManager.getProductById(1)); 
  
  console.log(productManager.getProductById(3)); // Simulando un ID que no existe
  