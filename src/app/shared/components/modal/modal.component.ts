import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  showModal: boolean = false;
  esEdit: boolean = false;
  @Input() titulo: string = '';

  productData: Product = {
    name: '',
    description: '',
    price: 0,
    stock: 0
  };


  formProduct = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(),
    stock: new FormControl(),
  })

  constructor(private modalService: ModalService, private productService: ProductService) { }

  ngOnInit(): void {
    this.modalService.currentShowModal.subscribe((modalData: { show: boolean, data: any, editProduct: boolean }) => {
      console.log(modalData);
      this.showModal = modalData.show;
      this.esEdit = modalData.editProduct;

      if (modalData.data) {
        this.productData = modalData.data;
        console.log(this.productData);
        this.formProduct.patchValue({
          name: this.productData.name,
          description: this.productData.description,
          price: this.productData.price,
          stock: this.productData.stock
        });

      }
    });
  }

  crear() {
    const product = {
      id: this.productData.id,
      name: this.formProduct.get('name')?.value,
      description: this.formProduct.get('description')?.value,
      price: this.formProduct.get('price')?.value || 0,
      stock: this.formProduct.get('stock')?.value || 0,
    }
    console.log(product)
    if (this.esEdit) {
      this.productService.updateProduct(product).subscribe(data => {
        console.log(data);
        this.productService.notifyProducts();
        this.closeModal();
        this.formProduct.reset();
      }, error => {
        // Manejar el error aquí
        console.error('Ocurrió un error al crear el producto:', error);
      })
    } else {
      this.productService.createProduct(product).subscribe(data => {
        console.log(data);
        this.productService.notifyProducts();
        this.closeModal();
        this.formProduct.reset();
      }, error => {
        // Manejar el error aquí
        console.error('Ocurrió un error al crear el producto:', error);
      })
    }
  }

  closeModal() {
    this.modalService.changeShowModal(false, null, false);
  }
}
