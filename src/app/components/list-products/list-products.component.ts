import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  titulo: string = ''
  listProducts: Product[] = [
    {
      name: 'Coca Cola',
      description: 'Bebida con azucar',
      price: 4,
      stock: 200
    },
    {
      name: 'Corona',
      description: 'Bebida con alcohol',
      price: 5,
      stock: 300
    }
  ];

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {

  }

  agregarProducto() {
    this.titulo = 'Agregar Producto';
    this.modalService.changeShowModal(true, null);
  }

  editProduct(product: Product) {
    this.titulo = 'Editar producto';
    this.modalService.changeShowModal(true, product);
    console.log('editProduct');
    console.log(product);

  }

  deleteProduct(product: Product) {
    console.log('deleteProduct')
    console.log(product)
  }
}
