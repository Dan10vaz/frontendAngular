import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  titulo: string = ''
  listProducts: Product[] = [];
  // Propiedades para el paginador
  currentPage: number = 1; // Página actual
  itemsPerPage: number = 5; // Cantidad de elementos por página
  totalPages!: number; // Total de páginas

  constructor(private modalService: ModalService, private products: ProductService) { }

  ngOnInit(): void {
    this.products.productCreated$.subscribe(() => {
      this.obtenerDatosTabla();
    })
  }

  obtenerDatosTabla = () => {
    this.products.getProducts().subscribe(products => {
      console.log(products);
      this.listProducts = products;
    });
  }

  agregarProducto() {
    this.titulo = 'Agregar Producto';
    this.modalService.changeShowModal(true, null, false);
  }

  editProduct(product: Product) {
    this.titulo = 'Editar producto';
    this.modalService.changeShowModal(true, product, true);
    console.log('editProduct');
  }

  deleteProduct(product: Product) {
    console.log('deleteProduct')
    console.log(product.id)

    this.products.deleteProduct(product.id).subscribe(data => {
      console.log(data)
      this.products.notifyProducts();
    }, error => {
      console.log(error)
    })
  }



  // Método para cambiar de página
  onPageChange(page: number) {
    this.currentPage = page;
    // Lógica para obtener los datos de la página actual
    this.obtenerDatosTablaPaginador();
  }

  obtenerDatosTablaPaginador = () => {
    this.products.getProductsPaginated(this.currentPage, this.itemsPerPage).subscribe(products => {
      console.log(products);
      this.listProducts = products.items; // Actualiza los productos en la tabla
      this.totalPages = products.totalPages; // Actualiza el total de páginas
    });
  }


}
