import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { ModalService } from 'src/app/services/modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  showModal: boolean = false;

  @Input() titulo: string = '';

  productData: Product = {
    name: '',
    description: '',
    price: 0,
    stock: 0
  };


  formProduct = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(),
    stock: new FormControl(),
  })

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.currentShowModal.subscribe((modalData: { show: boolean, data: any }) => {
      this.showModal = modalData.show;
      if (modalData.data) {
        this.productData = modalData.data;
        this.formProduct.patchValue({
          name: this.productData.name,
          description: this.productData.description,
          price: this.productData.price,
          stock: this.productData.stock
        });
      }
    });
  }

  closeModal() {
    this.modalService.changeShowModal(false, null);
  }
}
