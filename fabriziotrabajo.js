// Hola soy fabritzio dejo en cada paso un comentario con mis palabras 
//corroborar que entendi


// aca esta la clase de product que pidieron
class  ProductManager{
  
    constructor (){ //aca el constructor
    this.products = []; //arreglo vacio
    this.idProducto = 1; // este es el primer id que despues sera incrementado con "++"
    //no me deja ponerlo privado con el numeral (#, tipo #idProducto)
    }
    

    // Importante (hay algo de aca que no entiendo )
    añadirProducto(title, description, price, thumbnail, code, stock) // <== Se que esto sirve para crear un nuevo producto ejemplo el mio sera un iphone
    //me comprare un celular nuevo y tomare de ejemplo
    {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
        // I M P O R T A N T E
        // lo que no entiendo es esto este "if" obvio son los campos del producto que muestra que todo esto "title ,description"
        //etc, este escrito lo que no entiendo son las dobles lineas o paredes no se como se llama || y los "!" supongo que 
        // la doble "||" es para separar como si fuese una ";" 
        
          console.error('Todos los campos son obligatorios');
          return;
        }
         // Validar que el código no esté repetido
         
      const codeExists = this.products.find(product => product.code === code);
      if (codeExists) { return "El producto ya existe "
      }
  
      const newProduct = { // en el video el profe muestra como se podria hacer id : id o "id," (01:37)
        id: this.idProducto,
        title,
       description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      this.productId++; // Incrementar el ID para el próximo producto explicado mas arriba el "++"
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

//Eneas Baroni quiere comprar un iphone 14 Promax lo cual pide una cotizacion en dolares a la pagina de iphoneCoder
productManager.añadirProducto('Iphone 14 promax ', '250Gb', 1200, 'Sin imagen', '14max', 10);
console.log(productManager.getProducts());

//pero tambien quiere una computadora Hp en pesos 
productManager.añadirProducto('Hp ryzen Model Pirulo', 'Excelente para programar y jugar ', 600000, 'Sin imagen', 'hp123', 4);
console.log(productManager.getProductById(2)); 

console.log(productManager.getProductById(3)); // Simulando un ID que no existe

