import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  name:string;
  constructor() {
    this.name="";
   }
}
