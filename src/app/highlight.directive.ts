import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private elem: ElementRef) {}
  @HostListener('click') onclicks() {
    this.textDeco('red');
  }

  @HostListener('dbclick') onDoubleClicks() {
    this.textDeco('none');
  }
  private textDeco(color: string) {
    this.elem.nativeElement.style.backgroundcolour = color;
  }
}
