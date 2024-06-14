import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  OnDestroy,
  ViewChild,
  ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated is the default value and you kan switch to None or ShadowDom
})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) prgraph: ElementRef;

  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    // console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log("text content: "+ this.header.nativeElement.textContent);
    console.log("content paragraph: " + this.prgraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
    console.log("content paragraph: " + this.prgraph.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log("text content: "+ this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

}
