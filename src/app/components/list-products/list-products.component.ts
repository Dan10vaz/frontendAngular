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
}
