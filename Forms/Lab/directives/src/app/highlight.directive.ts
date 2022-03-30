import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    
     //this.el.nativeElement.style.color = 'blue';


}


@HostListener('mouseenter') onMouseEnter() {
  this.highlight('yellow', 'green');
}

@HostListener('mouseleave') onMouseLeave() {
  
  this.highlight('teal', 'white');

}

private highlight(color: string, text: string) {
  this.el.nativeElement.style.backgroundColor = color;
  this.el.nativeElement.style.color = text;
}

}
