import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  constructor() { }

private isHeadMaster;

setData(isHeadMaster){
  this.isHeadMaster = isHeadMaster;
}

getData(){
  return this.isHeadMaster;
}
}
