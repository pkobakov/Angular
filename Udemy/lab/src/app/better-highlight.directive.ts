import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'none';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
  }

  @HostListener ('mouseenter') mouseover (eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','red');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color','white');
    this.backgroundColor = 'teal';
    this.color = 'white';

  }

  @HostListener('mouseleave') mouseleave (eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
    this.backgroundColor = 'salmon';
    this.color = 'white';
    
  }


}
