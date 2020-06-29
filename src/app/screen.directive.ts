import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { CurrentBrowser } from './currentBrowser.service';


@Directive({ selector: '[onlyForScreen]'})
export class ScreenDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private browserService: CurrentBrowser) {

     }

     @Input() set onlyForScreen(condition: string) {

      if(window.innerWidth < this.browserService.getConfig().mobile && condition === 'mobile'){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
      if(window.innerWidth >= this.browserService.getConfig().mobile && window.innerWidth < this.browserService.getConfig().tablet  && condition === 'tablet'){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }

      if(window.innerWidth >= this.browserService.getConfig().tablet  && condition === 'desktop'){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }



}
