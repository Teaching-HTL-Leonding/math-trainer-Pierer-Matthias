import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public digits:number[]=[1,2,3,4];
  public questionDigit:number[]=[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  public questionAmount:number=10;
  public operators:string[]=["+","-","*","/"];
  public currentOperators:boolean[]=[true,true,true,true];
  public digit=1;

  constructor() { }
}
