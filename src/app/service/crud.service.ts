import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices: AngularFirestore) { }

  createRecord(Record)
  {
    return this.fireservices.collection('Qrcode').add(Record);
  }
}
