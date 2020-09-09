import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDestacar]'
})
export class DestacarDirective {

  constructor(private el: ElementRef, private renderer: Renderer2 ) {
  renderer.setStyle(el.nativeElement, 'font-weight', 'bold')
  renderer.setStyle(el.nativeElement, 'font-style', 'italic')
   }

}
