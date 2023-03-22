import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: AngularFirestore) {
  }

  getCoronaData() {
    return this.firestore.collection('corona_data').valueChanges();
  }
}
