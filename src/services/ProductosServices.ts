import Productos from '../Interface/Productos'
import { Ref, ref } from 'vue'

class ProductosServices {
  private producto: Ref<Productos>
  private productos: Ref<Arrray<Productos>>

  constructor() {
    this.producto = ref<Productos>({})
    this.productos = ref<Arrray<Productos>>({})
  }

  getProducto(): Ref<Productos> {
    return this.producto
  }

  getProductos(): Ref<Array<Productos>> {
    return this.productos
  }

  //todos sus productos
  async fetchAll(): Promise<void> {
    try {
      const url = 'https://api.escuelajs.co/api/v1/products'
      const response = await fetch(url)
      const json = await response.json()
      this.productos.value = await json.result()
    } catch (error) {
      console.log(error)
    }
  }
  //un producto
  async fetchById(id: any): Promise<void> {
    try {
      const url = 'https://api.escuelajs.co/api/v1/products/${id}'
      const response = await fetch(url)
      const json = await response.json()

      this.producto.value = await json.result()
    } catch (error) {
      console.log(error)
    }
  }
}

export default ProductosServices
