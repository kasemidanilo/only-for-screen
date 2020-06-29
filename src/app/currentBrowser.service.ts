import { Injectable } from '@angular/core';
import { IConfig } from './IConfig';
import { HostListener } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class CurrentBrowser {

  constructor() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
     getScreenSize(event?) {
       console.log(window.innerWidth)
           return window.innerWidth;
     }

  getConfig(): IConfig {
    let config: IConfig = {
      mobile: 638,
      tablet: 738
  }
  console.log(config);
    return config;
  }



}
