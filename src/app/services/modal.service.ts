import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private showModalSource = new BehaviorSubject<{ show: boolean, data: any }>({ show: false, data: null });

  currentShowModal = this.showModalSource.asObservable();

  constructor() { }

  changeShowModal(show: boolean, data: any) {
    this.showModalSource.next({ show, data });
  }
}
