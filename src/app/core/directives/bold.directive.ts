
import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[cousrive]',
    standalone:true
})
export class BoldDirective {    
    constructor(private elementref: ElementRef)
    {
        this.elementref.nativeElement.style.fontStyle = "italic";
    }
}