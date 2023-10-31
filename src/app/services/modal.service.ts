import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private showModalSource = new BehaviorSubject<{ show: boolean, data: any, editProduct: boolean }>({ show: false, data: null, editProduct: false });

  currentShowModal = this.showModalSource.asObservable();

  constructor() { }

  changeShowModal(show: boolean, data: any, editProduct: boolean) {
    this.showModalSource.next({ show, data, editProduct });
  }
}
